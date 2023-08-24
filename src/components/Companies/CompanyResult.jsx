import React from "react";

function CompanyResult(props){
    return  (
        <div className="container">
            <div className='m-5'>
                    <table className="table-responsive table m-5 rounded-3">
                        <caption>List of users</caption>
                        <thead>
                        <tr>
                            <td>Symbol</td>
                            <td>Company name</td>
                            <td>Region</td>
                            <td>Type</td>
                            <td>Currency</td>
                            </tr>
                        </thead>
                        <tbody>
                            {props.companies.map((data,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{data['1. symbol']}</td>
                                        <td>{data['2. name']}</td>
                                        <td>{data['4. region']}</td>
                                        <td>{data['3. type']}</td>
                                        <td>{data['8. currency']}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    )

}
export default CompanyResult
