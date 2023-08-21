import React, { useEffect } from "react";
import { useState } from "react";
import TodoCard from "./TodoCard.jsx";
import '../../index.css';


function Todo() {

    const [todoObj, setTodoObj] = useState({text: '', isCompleted: 0});
    const [todoArray, setTodoArray] = useState([]);
    const [show, setShow] = useState('all');
    const [filteredArray, setFilteredArray] = useState([]);

    useEffect(() => {
        getFilteredArray();
    })

    function changeShowData(e){
        setShow(e.target.innerText.toLowerCase());

        getFilteredArray();
    }

    const getFilteredArray = () => {
        let filteredTodo = todoArray.filter((todoList) => {
            if(show === 'all'){
                return todoList;
            }else if(show === 'active'){
                return todoList.isCompleted == 0;
            }else if(show === 'completed'){
                return todoList.isCompleted == 1;
            }
        });

        setFilteredArray(filteredTodo);
    }

    function changeVal(e){
        setTodoObj({text:e.target.value, isCompleted: todoObj.isCompleted});
    }

    function changeIsCompleted(e){
        setTodoObj({text:todoObj.text, isCompleted: e.target.checked});
    }

    function saveTodo(){
        setTodoArray((prev) => {
            return [...prev, todoObj];
        });
        getFilteredArray();
        setTodoObj({text: '', isCompleted: 0});
    }

    return (
    <div className="row text-center todo">
        <h1 className="text-center mt-5 fw-bolder">To-do Lists</h1>
        <div className="d-flex justify-content-center">
                <div>
                    <input type="checkbox" className="form-check-input m-3 p-3" value="1" onChange={changeIsCompleted} checked={todoObj.isCompleted} />
                </div>
            <div className="row d-flex align-items-center">
                <div className="col-6">
                    <input type="text" className="form-control" placeholder="Enter your todo here" onChange={changeVal} value={todoObj.text}/>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger px-5" onClick={saveTodo} >Save</button>
                </div>
            </div>
        </div>
            <div className="d-flex justify-content-center">
                <div className="row col-6">
                <div className="col-4"><li type="button" onClick={changeShowData} className={'nav-link ' + (show === 'all' ? "active" : "")}>All</li></div>
                <div className="col-4"><li type="button" onClick={changeShowData} className={'nav-link ' + (show === 'completed' ? "active" : "")}>Completed</li></div>
                <div className="col-4"><li type="button" onClick={changeShowData} className={'nav-link ' + (show === 'active' ? "active" : "")}>Active</li></div>
                </div>
            </div>

        <div className="mt-5 row">
            {filteredArray.map((todoList, index) => {
                return <TodoCard todoList={todoList} key={index} />
            })}
        </div>
    </div>
    );
}
export default Todo;
