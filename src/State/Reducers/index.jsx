import React from "react";
import { combineReducers } from "redux";
import BgColorReducer from "./ColorReducer";

const reducers = combineReducers({
    color : BgColorReducer,
});

export default reducers;
