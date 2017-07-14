import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      queryString: '',
      focus: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.addFocus = this.addFocus.bind(this);
    this.unFocus = this.unFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.emptySearchBar = this.emptySearchBar.bind(this);
  }

  addFocus() {
    this.setState({focus: true});
  }

  unFocus() {
    this.setState({focus: false});
  }

  emptySearchBar() {
    this.setState({queryString: ''});
  }

  handleChange(e) {
    let { queryUsers } = this.props;
    this.setState({queryString: e.currentTarget.value});
    let queryString = this.state.queryString;
    if (e.currentTarget.value !== "") {
      queryUsers(e.currentTarget.value);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  searchResults() {
    const { searchBar } = this.props;

    if (this.state.focus) {
      if (this.state.queryString === "") {
        return;
      }

      let users = searchBar.map( (user, idx) => {
        return (
          <li key={idx} className='search-result-item'>
            <Link to={`/users/${user.userId}`} onMouseDown={this.handleClick} onClick={this.emptySearchBar}>
            <img src={user.avatar_url}></img>
            &nbsp; &nbsp;
            { user.username }
            </Link>
          </li>
        );
      });

      return users;
    } else {
      return;
    }
  }

  handleClick(e) {
    e.preventDefault();
  }

 render () {
    return (
      <section className="search">
          <form onSubmit={this.handleSubmit}>
            <label>
              <i id='search-icon' className="fa fa-search" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={ this.handleChange }
                onFocus={this.addFocus}
                onBlur={this.unFocus}
                >
              </input>

            </label>
          </form>

          <ul className='search-results'>
            { this.searchResults() }
          </ul>

      </section>
    );

 }
}



export default Search;
