import { connect } from 'react-redux';
import Search from './search';
import { queryUsers } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    searchBar: state.searchBar,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    queryUsers: (queryString) => dispatch(queryUsers(queryString))
 };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
