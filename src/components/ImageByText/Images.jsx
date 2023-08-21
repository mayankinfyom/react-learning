import React from "react";

export default function Images(props){
    const ImageText = props.ImageText;
    const url = `https://source.unsplash.com/1600x900/?${ImageText}`;

    return (
    <div className="container">
        <img src={url} alt="Images" width="700px"/>
    </div>
    );
}
