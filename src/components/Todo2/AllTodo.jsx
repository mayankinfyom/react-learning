import React from "react";

function AllTodo(props) {

    const {todo,id,deleteTodo} = props;
    return (
        <li className="my-4" key={id}>
            {todo}
            <button className="btn text-danger  btn-outline-warning fw-bolder mb-1 pb-1 ms-4" onClick={() => {deleteTodo(id)}}>
                x
            </button>
        </li>
    );
}

export default AllTodo;
