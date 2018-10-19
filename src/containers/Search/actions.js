import searchConstant from './actiontypes';

import history from '../../History';

const axios = require('axios');

const searchSuccess = payload => ({
  type: searchConstant.SEARCH_SUCCESS,
  payload,
});
const SearchFailure = error => ({
  type: searchConstant.SEARCH_FAIL,
  error,
});


const searchItem = (name, filter) => dispatch => axios.get(`https://ah-leagueoflegends-staging.herokuapp.com/api/search/articles?${filter}=${name}`)
  .then((response) => {
    dispatch(searchSuccess(response.data.results));
    history.push('/search');
  })
  .catch((error) => {
    dispatch(SearchFailure(error));
  });

export { searchItem };
export { searchSuccess };
export { SearchFailure };
