import React from "react";
import { combineReducers } from "redux";
import BgColorReducer from "./ColorReducer";
import NewsReducers from "./news_api_reducers";
import reduxCrudReducer from "./redux_crud_reducers";

const reducers = combineReducers({
    color : BgColorReducer,
    newsData : NewsReducers,
    userData : reduxCrudReducer
});

export default reducers;
