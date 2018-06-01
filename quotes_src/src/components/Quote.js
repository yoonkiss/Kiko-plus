import React from 'react';
import format from 'date-fns/format'

export default class Quote extends React.Component {

  static propTypes = {
    quote: React.PropTypes.object.isRequired,
    toggleLike: React.PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      reveal: false,
    };
  }

  componentWillReceiveProps() {
    this.setState({reveal: false});
  }

  flip() {
    this.setState({
      reveal: !this.state.reveal,
    });
  }

  render() {
    const quote = this.props.quote,
          author = quote.author && (quote.author + (quote.interlocutor && ' to ' + quote.interlocutor)),
          date = quote.date;

    const className = "card flip-container" + (this.state.reveal ? ' flip' : '');
    return (
      <div className="quote">
        <div className="quote__meta-wrapper">
          <cite className="quote__meta">
            <span className="quote__meta-content">
              { quote.author ? (<b>{quote.author}</b>) : ('')} { quote.date ? ', ' : ' ' }{ date && format(date, 'DD/MM/YYYY') }
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
        <blockquote className="quote__body" onClick={this.flip.bind(this)}>
        <div className="front" style={{display: this.state.reveal ? 'none' : ''}}>
              { quote.question.map((sentence, i) => {
                return (
                  <p key={ i }>{ sentence }</p>
                );
              }) }
              </div>
              <div className="back"  style={{display: this.state.reveal ? '' : 'none'}}>
              { quote.answer.map((sentence, i) => {
                return (
                  <p key={ i }>{ sentence }</p>
                );
              }) }
              <div>
              { quote.keywords.map((sentence, i) => {
                return (
                  <p key={ i }>{ sentence }</p>
                );
              }) }
              </div>

              </div>
        </blockquote>
      </div>
    );
  }

  handleLike(e) {
    e.preventDefault();
    this.props.toggleLike(this.props.quote);
  }

}
