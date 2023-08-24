import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, fetchUser, updateUser } from "../../../State/ActionCreators/redux_crud_action_creator";

export default function ReduxCrud(){
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);

    const [formInput, setFormInput] = useState({
            fName: "",
            lName: "",
            email: "",
            phone: "",
    });

    const [inputError, setInputError] = useState({
        fNameError: "",
        lNameError: "",
        emailError: "",
        phoneError: "",
    });

    const userList = useSelector(state => state.userData);

    useEffect(()=>{
        dispatch(fetchUser());
    },[]);

    useEffect(()=>{
        setFormInput({
            fName: "",
            lName: "",
            email: "",
            phone: "",
        });
    },[userList]);

    const ChangeFormValue = (e) => {
        const {name,value} = e.target;
        setFormInput((prevValue)=>{
            return {...prevValue,[name]:value};
        });
    }

    const SubmitForm = async(e) => {
        e.preventDefault();
        let canSubmit = true;
       Object.keys(formInput).map((input)=>{
           if(input != 'id'){
            if(formInput[input].trim().length === 0){
                canSubmit = false;
                return setInputError((prevValue)=>{
                    return {...prevValue,[input+'Error']:`${input} is required`};
                });
            } else {
                return setInputError((prevValue)=>{
                    return {...prevValue,[input+'Error']:''};
                });
            }
        }
        });

        if(canSubmit){

            if(isEdit){
                dispatch(updateUser(formInput));
                setIsEdit(false);
            }else{
              dispatch(createUser(formInput));
            }
        }
    }

    const editUser = (index) => {
        const user = userList[index];
        setFormInput({
            fName: user.fName,
            lName: user.lName,
            email: user.email,
            phone: user.phone,
            id: user.id
        });
        setIsEdit(true);
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center">Redux CRUD with validation</h1>
            <form onSubmit={SubmitForm} className='mt-5'>
            <div className="d-flex justify-content-center   ">
                <div className="form-group m-4">
                    <label htmlFor="" className='form-label'>First Name</label>
                    <input type="text" name="fName" className="form-control " id="" value={formInput.fName} onChange={ChangeFormValue}/>
                    {inputError.fNameError && <p className='text-danger'>{inputError.fNameError}</p>}
                </div>
                <div className="form-group m-4">
                <label htmlFor="" className='form-label'>Last Name</label>
                    <input type="text" name="lName" className="form-control " id="" value={formInput.lName} onChange={ChangeFormValue}/>
                    {inputError.lNameError && <p className='text-danger'>{inputError.lNameError}</p>}
                </div>
                <div className="form-group m-4">
                <label htmlFor="" className='form-label'>Email</label>
                    <input type="email" name="email" className="form-control" id="" value={formInput.email} onChange={ChangeFormValue}/>
                    {inputError.emailError && <p className='text-danger'>{inputError.emailError}</p>}
                </div>
                <div className="form-group m-4">
                    <label htmlFor="" className='form-label'>Phone number</label>
                    <input type="text" name="phone" className="form-control" id="" value={formInput.phone} onChange={ChangeFormValue}/>
                    {inputError.phoneError && <p className='text-danger'>{inputError.phoneError}</p>}
                </div>
                <div className="m-4">
                    <input type="submit" className="btn btn-primary" value="Submit"/>
                </div>
            </div>
            </form>

                <div className='m-5'>
                    <table className="table-responsive table m-5 rounded-3">
                        <caption>List of users</caption>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone number</td>
                            <td colSpan="2" className='text-center'>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{user.fName + ' ' + user.lName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td className='text-center'> <a role="button" className="btn btn-success" onClick={() => editUser(index)}>Edit</a> </td>
                                        <td className='text-center'> <a role="button" className="btn btn-danger" onClick={() => dispatch(deleteUser(user.id))}>Delete</a> </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}
