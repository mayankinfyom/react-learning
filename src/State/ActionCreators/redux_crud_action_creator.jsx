import axios from "axios";

export const fetchUser = () => (dispatch) => {
    try {
        axios.get('http://localhost:4000/profile')
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
        axios.post('http://localhost:4000/profile', data)
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
        axios.put(`http://localhost:4000/profile/${data.id}`, data)
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
        axios.delete(`http://localhost:4000/profile/${id}`)
        .then((response) => {
            dispatch(fetchUser());
        });
    }
    catch (error) {
        alert(error);
    }
}
