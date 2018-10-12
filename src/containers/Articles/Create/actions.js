import { BACKEND_URL } from '../../../utils/config';


export default function publishArticle(data, history, update = false, slug) {
  console.log('@@@@@@', data)
  return async (dispatch) => {
    let MAIN_URL = `${BACKEND_URL}api/articles`;
    if (update) {
      MAIN_URL = `${BACKEND_URL}api/articles/${slug}`;
    }
    const method = `${update ? 'PUT' : 'POST'}`;
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiZXhwIjoxNTQxNzUzNjc0fQ.aP0y7XZbbq5wVp-SqWmpx3n4wERppmqCCCCQYqQB5uI';
  fetch(MAIN_URL,{
    method,
    headers: {
            'Content-Type': 'application/json',
			      'Authorization': 'Bearer '+token
        },
        body: JSON.stringify(data)
  }).then(res=> res.json())
  .then(data=>{
    dispatch({
      type: 'PUBLISH_ARTICLE',
      data
    })
  })

  };
}
