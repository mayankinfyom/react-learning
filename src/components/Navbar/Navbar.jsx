import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeBgColor,changeTextColor } from "../../State/ActionCreators/index";


export function Navbar() {
    const dispatch = useDispatch();
    const {color:{bgColor,textColor}} = useSelector(state => state);

   return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Apps
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/todo">Todo</Link></li>
                    <li><Link className="dropdown-item" to="/todo/2.0">Todo 2.0</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/user-crud">User CRUD</Link></li>
                    <li><Link className="dropdown-item" to="/get-image-by-text">Image by text</Link></li>
                    <li><Link className="dropdown-item" to="/search-companies">Search Companies</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/trending-news">Live News</Link></li>
                </ul>
                </li>
            </ul>

            <form className="d-flex">
                    <input className="mx-2" type="color" name="bgColor" onChange={(e) => dispatch(changeBgColor(e.target.value))} value={bgColor}/>
                    <input className="mx-2" type="color" name="textColor" onChange={(e) => dispatch(changeTextColor(e.target.value))} value={textColor}/>
            </form>
            </div>
        </div>
        </nav>;
}
