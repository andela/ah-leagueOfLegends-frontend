import { BACKEND_URL } from '../../../utils/config';

export default function getArticles() {
  return async (dispatch) => {
    const apiUrl = ` ${BACKEND_URL}api/articles`;
    const res = await fetch(apiUrl);
    const articles = await res.json();
    return dispatch({
      type: 'GET_ARTICLES',
      payload: articles.articles.results,
    });
  };
}
