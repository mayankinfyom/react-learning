import React from "react";
import { combineReducers } from "redux";
import BgColorReducer from "./ColorReducer";
import NewsReducers from "./news_api_reducers";

const reducers = combineReducers({
    color : BgColorReducer,
    newsData : NewsReducers
});

export default reducers;
