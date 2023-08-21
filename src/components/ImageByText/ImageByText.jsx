import React, { useState } from "react";
import Images from "./Images";

export default function ImageByText(){

    const [text,setText] = useState("");

    return (
        <>
            <h1 className="text-center mt-5 mx-5 fw-bolder">Image by given text</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Type here..." value={text} onChange={(e) => {setText(e.target.value)}} />
                </div>
            </div>
                <div className="d-flex justify-content-center text-center m-2">
                    {text && <Images ImageText={text} />}
                </div>
        </>
    );
}
