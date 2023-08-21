import React, { useEffect, useState } from "react";
import CompanyResult from "./CompanyResult";

function Companies(){

    const [text,setText] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetchCompanies();
    }, [text]);

    function fetchCompanies(){
        let url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text}&apikey=IYRTYXUCS1K7FMPO`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if(data){
                    setResult(data.bestMatches);
                } else {
                    setResult([]);
                }
            })
            .catch((err) => {
                alert(err.message);
            });
    }

    return (
        <>
            <h1 className="text-center mt-5 mx-5 fw-bolder">Search Companies</h1>
            <div className="d-flex justify-content-center mt-4">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search here..." value={text} onChange={(e) => {setText(e.target.value)}} />
                </div>
            </div>
                <div className="d-flex justify-content-center text-center m-2">
                    {result && <CompanyResult companies={result} />}
                </div>
        </>
    );
}

export default Companies;
