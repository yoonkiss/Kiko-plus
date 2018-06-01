import React from 'react';

export default class Filters extends React.Component {

  static propTypes = {
    categories: React.PropTypes.array.isRequired,
    setCategory: React.PropTypes.func.isRequired,
    order: React.PropTypes.string.isRequired,
    setOrder: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <ul className="filters">
        <li>
          <select value={ this.props.category } onChange={ this.handleCategoryChange.bind(this) }>
            <option value="">Filter by category</option>
            { this.props.categories.map((category, i) => {
              if (!category) { return false; };

              return (
                <option key={ i }>{ category }</option>
              );
            }) }
          </select>
        </li>
        <li>
          <select value={ this.props.order } onChange={ this.handleOrderChange.bind(this) }>
            <option value="">Order by</option>
            <option value="likes">Popularity</option>
          </select>
        </li>
      </ul>
    );
  }

  handleCategoryChange(e) {
    this.props.setCategory(e.target.value);
  }

  handleOrderChange(e) {
    this.props.setOrder(e.target.value);
  }

}
