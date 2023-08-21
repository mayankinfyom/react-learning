import React from "react";
import DemoText from "./DemoText";
import { useDispatch, useSelector } from "react-redux";
import { changeBgColor,changeTextColor } from "../../../State/ActionCreators/index";

export default function ColorCustomize() {

    const dispatch = useDispatch();
    const {color:{bgColor,textColor}} = useSelector(state => state);

    return (
        <div className="container mt-3">
            <h1 className="text-center">Color Customization</h1>
            <div className="d-flex align-item-center">
                <div className="col-6 d-flex">
                    <label htmlFor="bgColor" className="mx-2">Background Color</label>
                    <input className="col-3" type="color" name="bgColor" onChange={(e) => dispatch(changeBgColor(e.target.value))} value={bgColor}/>
                </div>

                <div className="col-6 d-flex">
                    <label htmlFor="textColor" className="mx-2">Text Color</label>
                    <input className="col-3" type="color" name="textColor" onChange={(e) => dispatch(changeTextColor(e.target.value))} value={textColor}/>
                </div>
            </div>
            <DemoText/>

        </div>
    )
}
