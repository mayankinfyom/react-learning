import React, { useEffect } from "react";
import NewsCard from "./NewsCard.jsx";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../../State/ActionCreators/news_api_action_creator.jsx";

export default function NewsAPI() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    },[]);
    return (
        <div className="container mt-5">

            <div className="d-flex justify-content-center">
                <h1 className="text-success">Live News </h1>
                <div className="m-2">
                    <input className="form-control" placeholder="search..." onChange={(e) => dispatch(fetchNews(e.target.value))}/>
                </div>
            </div>
            <div>
                <NewsCard/>
            </div>
        </div>
    );
}
