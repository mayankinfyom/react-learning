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
import App from "../App.js";
import NewsAPI from "./Redux/NewsAPI/NewsAPI.jsx";

export default function AllRoutes(){

    const {color:{bgColor,textColor}} = useSelector(state => state);

    return (
        <div className="" style={{ backgroundColor: bgColor , color: textColor , minHeight:window.innerHeight+'px'}}>
        <HashRouter>
        <Navbar/>
        <Routes>
            <Route exact path='/' element={<App/>}/>
                <Route path='/todo' element={<Todo/>}/>
                <Route path='/user-crud' element={<Form/>}/>
                <Route path='/todo/2.0' element={<Todo2/>}/>
                <Route path='/get-image-by-text' element={<ImageByText/>}/>
                <Route path='/search-companies' element={<Companies/>}/>
                <Route path='/trending-news' element={<NewsAPI/>}/>
                <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </HashRouter>
        </div>
    );
}
