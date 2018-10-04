import configureStore from 'redux-mock-store';

//For passing the middlewares
const mockStore = configureStore();
//Init the mockstore with an empty state
const initialState ={}
const store = mockStore(initialState);
//creating an actionType
const expectedAction = type => ({
    type,
});

describe('Actions for articles', () => {
    //Add article
    it('should do an add article action', () => {

    });
    //Edit article
    it('should do an edit article action', () => {

    });
    //Delete article
    it('should do a delete article action', () => {

    });
    //List articles
    it('should do a list article action', () => {

    });
});
