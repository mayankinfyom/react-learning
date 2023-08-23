import React from "react";
import { useSelector } from "react-redux";

export default function NewsAPI() {
    const liveNews = useSelector((state) => state.newsData);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
            {liveNews.map((news,index) => {
           return (
            <div className="col-md-4 col-12" key={news.uri}>
                <div className="card h-100">
                    <img src={news.image ?? 'https://w7.pngwing.com/pngs/748/607/png-transparent-news-media-newspaper-advertising-information-news-icon-text-orange-logo.png'} className="card-img-top" alt="..." height='300px'/>
                    <div className="card-body">
                        <h5 className="card-title">{news.title}</h5>
                        <p className="card-text">{news.body.split(" ").slice(0, 100).join(" ") + "..."}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{new Date(news.dateTime).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</small>
                    </div>
                </div>
            </div>
            )
            })}

        </div>
    );
}
