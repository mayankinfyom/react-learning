
export const changeBgColor = (color) => (dispatch) => {
        dispatch({
            type: "CHANGE_BG_COLOR",
            payload: color
        })
}

export const changeTextColor = (color) => (dispatch) => {
        dispatch({
            type: "CHANGE_TEXT_COLOR",
            payload: color
        })
    };

