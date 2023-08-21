import React from "react";
import AllTodo from "./AllTodo";

function Todo2(){

    const [todo,setTodo] = React.useState("");
    const [todoArray,setTodoArray] = React.useState([]);
    function changeTodo(e){
        setTodo(e.target.value);
    }

    function saveTodo(){
        setTodoArray((prev) => [
            ...prev,todo
        ]);
        setTodo("");
    }

    function removeTodo(id){
        setTodoArray((prev) => {
            return prev.filter((todo,index) => {
                return index !== id;
            });
        });
    }

    return(
        <div>
            <h1 className="text-center">Create and Delete To-Do</h1>
            <div className="text-center">
                <div className="d-flex justify-content-center mt-4">
                    <div className="row col-8">
                    <div className="col-8">
                        <input type="text" className="form-control" placeholder="Enter your todo here" value={todo} onChange={changeTodo} />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary rounded-circle" onClick={saveTodo}>+</button>
                    </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <ul>
                        {todoArray.map((todo,index) => {
                            return <AllTodo todo={todo} id={index} deleteTodo={removeTodo} key={index}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Todo2;
