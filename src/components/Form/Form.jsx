import React, { useEffect, useState } from 'react';

function Form() {

    const getUserFromLocalStorage = localStorage.getItem('userList');
    const inputObj = {
        id: "",
        fName: "",
        lName: "",
        email: "",
        phone: ""
    }
    const [formInput, setFormInput] = useState(inputObj);
    const [userList, setUserList] = useState([]);

    function ChangeFormValue(e){
        const {name,value} = e.target;
        setFormInput((prevValue)=>{
            return {...prevValue,[name]:value};
        });
    }
    function SubmitForm(e){
        e.preventDefault();
        if(formInput.id){
            const updatedUserList = userList.map((user,index)=>{
                if(index === formInput.id){
                    return formInput;
                }
                return user;
            });
            localStorage.setItem('userList',JSON.stringify(updatedUserList));
            setUserList(updatedUserList);
        } else {
            let newUser = [...userList,formInput];
            setUserList(newUser);
            localStorage.setItem('userList',JSON.stringify(userList));
        }

        setFormInput(inputObj);

    }

    function editUser(index){
        const user = userList[index];
        setFormInput({
            id: index,
            fName: user.fName,
            lName: user.lName,
            email: user.email,
            phone: user.phone
        });
    }
    function deleteUser(index){
        const updatedUserList = userList.filter((user,i)=>{
            return i !== index;
        });
        setUserList(updatedUserList);
    }

    useEffect(()=>{

    },[userList]);

    useEffect(()=>{
        if(getUserFromLocalStorage){
            setUserList(JSON.parse(getUserFromLocalStorage));
        }
    },[]);

    return (
        <div className='container'>
            <h1 className='text-center mt-5 fw-bolder'>User Form</h1>
            <form onSubmit={SubmitForm} className='mt-5'>
            <div className="d-flex justify-content-center   ">
                <div className="form-group m-4">
                    <label htmlFor="" className='form-label'>First Name</label>
                    <input type="text" name="fName" className="form-control " id="" value={formInput.fName} onChange={ChangeFormValue}/>
                </div>
                <div className="form-group m-4">
                <label htmlFor="" className='form-label'>Last Name</label>
                    <input type="text" name="lName" className="form-control " id="" value={formInput.lName} onChange={ChangeFormValue}/>
                </div>
                <div className="form-group m-4">
                <label htmlFor="" className='form-label'>Email</label>
                    <input type="email" name="email" className="form-control" id="" value={formInput.email} onChange={ChangeFormValue}/>
                </div>
                <div className="form-group m-4">
                    <label htmlFor="" className='form-label'>Phone number</label>
                    <input type="text" name="phone" className="form-control" id="" value={formInput.phone} onChange={ChangeFormValue}/>
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
                                        <td className='text-center'> <a role="button" className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</a> </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}

export default Form;
