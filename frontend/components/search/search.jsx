import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: '',
      focus: false
    };

    this.preventDefault = this.preventDefault.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.focus = this.focus.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.emptySearchBar = this.emptySearchBar.bind(this);
  }

  focus(boolean) {
    return (boolean) => {
      this.setState({focus: boolean});
    };
  }

  emptySearchBar() {
    this.setState({queryString: ''});
    $(".search-input").val("");
  }

  handleChange(e) {
    let { queryUsers } = this.props;
    this.setState({queryString: e.currentTarget.value});
    let queryString = this.state.queryString;
    if (e.currentTarget.value !== "") {
      queryUsers(e.currentTarget.value);
    }
  }

  preventDefault(e) {
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

 render () {
    return (
      <section className="search">
          <form onSubmit={this.preventDefault}>
            <label>
              <i id='search-icon' className="fa fa-search" aria-hidden="true"></i>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={ this.handleChange }
                onFocus={this.focus(true)}
                onBlur={this.focus(false)}
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
