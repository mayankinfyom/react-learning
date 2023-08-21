const InitValue = {
    bgColor: '#ffffff',
    textColor: '#000000',
};
const BgColorReducer = (state = InitValue, action) => {
    switch (action.type) {
        case 'CHANGE_BG_COLOR':
            return { ...state, bgColor: action.payload };
        case 'CHANGE_TEXT_COLOR':
            return { ...state, textColor: action.payload };
        default:
            return state;
    }
}

export default BgColorReducer;
