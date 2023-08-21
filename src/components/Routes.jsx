import React from "react";
import {  HashRouter, Route, Routes } from "react-router-dom";
import Todo from './Todo/Todo.jsx';
import Form from './Form/Form';
import Todo2 from './Todo2/Todo2';
import { ErrorPage } from './Errors/ErrorPage.jsx';
import { Navbar } from './Navbar/Navbar.jsx';
import ImageByText from './ImageByText/ImageByText.jsx';
import Companies from './Companies/Companies.jsx';

import { useSelector } from "react-redux";
import ColorCustomize from "./Redux/ColorCustomization/ColorCustomize.jsx"
import App from "../App.js";
import NewsAPI from "./NewsAPI/NewsAPI.jsx";

export default function AllRoutes(){

    const {color:{bgColor,textColor}} = useSelector(state => state);

    return (
        <div className="" style={{ backgroundColor: bgColor , color: textColor}}>
        <HashRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/react-learning/' element={<App/>}/>
                <Route path='/react-learning/todo' element={<Todo/>}/>
                <Route path='/react-learning/user-crud' element={<Form/>}/>
                <Route path='/react-learning/todo/2.0' element={<Todo2/>}/>
                <Route path='/react-learning/get-image-by-text' element={<ImageByText/>}/>
                <Route path='/react-learning/search-companies' element={<Companies/>}/>
                <Route path='/react-learning/color-customize' element={<ColorCustomize/>}/>
                <Route path='/react-learning/trending-news' element={<NewsAPI/>}/>
                <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </HashRouter>
        </div>
    );
}
