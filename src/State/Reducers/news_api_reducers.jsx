const NewsReducers = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_NEWS':
            return action.payload;
        default:
            return state;
    }
}

export default NewsReducers;
