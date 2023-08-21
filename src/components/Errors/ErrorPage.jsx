import React from "react";
import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
          <h1 className="text-danger">404 - Page Not Found</h1>
          <p className="lead">The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-success">Go Back</Link>
        </div>
      </div>
    </div>
    );
}
