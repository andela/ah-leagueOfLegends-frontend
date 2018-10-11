import { BACKEND_URL } from '../../../utils/config';


const datat = {
  "article": {
    "title": "Done",
    "description": "Be happy",
    "body": "It takes a village",
    "tagList": ["hello", "happy"]
  }
}
export default function publishArticle(data=datat, history, update = false, slug) {
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
