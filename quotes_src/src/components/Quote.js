import React from 'react';
import format from 'date-fns/format'

export default class Quote extends React.Component {

  static propTypes = {
    quote: React.PropTypes.object.isRequired,
    toggleLike: React.PropTypes.func.isRequired
  };

  render() {
    const quote = this.props.quote,
          author = quote.author && (quote.author + (quote.interlocutor && ' to ' + quote.interlocutor)),
          date = quote.date;

    return (
      <div className="quote">
        
        <div className="quote__meta-wrapper">
          <cite className="quote__meta">
            <span className="quote__meta-content">
            { quote.question } <b>[{ author }]</b>{ author && quote.date ? ', ' : ' ' }{ date && format(date, 'DD/MM/YYYY') }
              <a href="#like"
                onClick={ this.handleLike.bind(this) }
                className={ 'quote__like' + (this.props.quote.liked ? ' liked' : '') }>
                <svg className="heart-icon">
                  <use xlinkHref="#heart" />
                </svg>
                { quote.likes }
              </a>
            </span>
          </cite>
        </div>
        <blockquote className="quote__body">
          { quote.text.map((sentence, i) => {
            return (
              <p key={ i }>{ sentence }</p>
            );
          }) }
        </blockquote>
      </div>
    );
  }

  handleLike(e) {
    e.preventDefault();
    this.props.toggleLike(this.props.quote);
  }

}
