import axios from "axios";

export const fetchUser = () => (dispatch) => {
    try {
        axios.get('https://my-json-server.typicode.com/mayankinfyom/react-learning/profile')
        .then((response) => {
            dispatch({
                type: 'GET_USER',
                payload: response.data
            });
        });
    }
    catch (error) {
        alert(error);
    }
}

export const createUser = (data) => (dispatch) => {
    try {
        axios.post('https://my-json-server.typicode.com/mayankinfyom/react-learning/profile', data)
        .then((response) => {
            dispatch(fetchUser());
        });
    }
    catch (error) {
        alert(error);
    }
}

export const updateUser = (data) => (dispatch) => {

    try {
        axios.put(`https://my-json-server.typicode.com/mayankinfyom/react-learning/profile/${data.id}`, data)
        .then((response) => {
            dispatch(fetchUser());
        });
    }
    catch (error) {
        alert(error);
    }
}

export const deleteUser = (id) => (dispatch) => {

    try {
        axios.delete(`https://my-json-server.typicode.com/mayankinfyom/react-learning/profile/${id}`)
        .then((response) => {
            dispatch(fetchUser());
        });
    }
    catch (error) {
        alert(error);
    }
}
