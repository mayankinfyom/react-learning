import React from "react";

export default function TodoCard(props) {
    let {text,isCompleted} = props.todoList;
    return (
        <div className="col-3 p-2">
            <div className="card">
                <div className="card-body d-flex align-items-center">

                    <input type="checkbox" className="form-check-input m-2" checked={isCompleted}/>
                   <h4 className="m-2">
                     {text}</h4>
                    </div>
            </div>
        </div>
    )
}
