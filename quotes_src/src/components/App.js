import React, { Component } from 'react';
import { orderBy } from 'lodash';

import { checkAuth, load, updateCell } from '../helpers/spreadsheet';
import { hash } from '../helpers/utils';
import * as ls from '../helpers/localStorage';

import Filters from './Filters';
import Quote from './Quote';
import Alert from './Alert';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sheet: '',
      items: [],
      random: {},
      categories: [],
      category: '',
      order: 'date'
    }
  }

  componentDidMount() {
    window.gapi.load('client', () => {
      checkAuth(true, this.handleAuth.bind(this));
    });
  }

  fetchSheetInfo(sheet) {
    if (this.state.sheet !== sheet) {
      this.setState({
        sheet: sheet
      }, () => {
        checkAuth(true, this.handleAuth.bind(this));
      });
    }
    
  }
  /**
   * Check user authenification status and set app state accordingly
   */
  handleAuth(authResult) {
    if (authResult && !authResult.error) {
      this.setState({
        authenticated: true
      });
      load(this.state.sheet, this.onLoad.bind(this));

    } else {
      this.setState({
        authenticated: false
      })
    }
  }

  /**
   * Once quotes have been loaded from the spreadsheet
   */
  onLoad(data, error) {
    if (data) {
      const random = data.items[Math.floor(Math.random() * data.items.length)];

      this.setState({
        ...data,
        random
      });
    }
    else {
      this.setState({
        error: error
      })
    }
  }

  render() {
    console.log("render");
    return (
      <div className="app">
        <h3 className="brand">“Today's English”</h3>
        <p>
        <a href='#'  
          onClick={ this.fetchSheetInfo.bind(this, 'Casual')}>
          [Casual...]
        </a>
        <a href='#'  
          onClick={ this.fetchSheetInfo.bind(this, 'Interview')}>
          [Interview...]
        </a>
        </p>
        { this.renderContent() }
        </div>
    );

  }

  nextQuestion() {
    const random = this.state.items[Math.floor(Math.random() * this.state.items.length)];

    this.setState({
      random
    });
  }

  renderContent() {
    const items = this.state.items;

    if (this.state.authenticated === false) {
      return (
        <button onClick={ this.authenticate.bind(this) } className="btn">Connect with Google</button>
      );
    }
    else if (items.length) {
      return (
        <div className="page">
          <Quote
            quote={ this.state.random }
            toggleLike={ this.toggleLike.bind(this) } />
              <button 
                className="nextButton" 
                onClick={this.nextQuestion.bind(this)}>
                Next...
              </button>
              

          <hr />

          <h2>{ this.state.items.length} questions</h2>
          <Filters
            categories={ this.state.categories }
            category={ this.state.category }
            setCategory={ this.setCategory.bind(this) }
            order={ this.state.order }
            setOrder={ this.setOrder.bind(this) } />
          <div className="quotes">
            { items.map((item, i) => {
              if (this.state.category && item.category !== this.state.category) {
                return false;
              }

              return (
                <Quote
                  key={ i }
                  quote={ item }
                  toggleLike={ this.toggleLike.bind(this) } />
              );
            }) }
          </div>
        </div>
      );
    }
    else if (this.state.error) {
      return (
        <Alert error={ this.state.error } />
      );
    }
    else {
      return (
        <div className="loader" />
      );
    }
  }

  /**
   * Request Google authentification
   */
  authenticate(e) {
    e.preventDefault();
    checkAuth(false, this.handleAuth.bind(this));
  }

  /**
   * Filter by author
   */
  setCategory(category) {
    this.setState({
      category
    });
  }

  setSheet(sheet, e) {
    this.setState({
      sheet: sheet
    });
  }
  /**
   * Change the order of the items
   */
  setOrder(order) {
    const items = orderBy(this.state.items, [order], ['desc']);

    this.setState({
      items,
      order
    });
  }

  /**
   * Add or remove like on the item
   * The value is incremented/decremented into the spreadsheet
   * User owns likes are saved to its browser LocalStorage
   */
  toggleLike(q, save = true) {
    const items = [...this.state.items],
          index = items.indexOf(q),
          item = items[index],
          userLikes = ls.get('likes') || [];

    if (item) {
      const id = hash(item.question);

      if (item.liked) {
        item.likes--;
        item.liked = false;

        const index = userLikes.indexOf(id);

        if (index > -1) {
          userLikes.splice(index, 1);
        }
      }
      else {
        item.likes++;
        item.liked = true;

        if (id) {
          userLikes.push(id);
        }
      }

      ls.set('likes', userLikes);

      // Update state immediately for instant visual feedback
      this.setState({
        items
      }, () => {
        if (save) {
          // Now save the data to the spreadsheet
          updateCell(this.state.sheet, 'E', item.row, item.likes, null, (error) => {
            // In case an error occured while saving, toggle the state back
            this.toggleLike(item, false);
          });
        }
      });
    }
  }

}

App.defaultProps = {
  sheet: 'Casual'
};
export default App;
