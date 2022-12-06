/** @format */

enum ActionString {
    TEST = "TEST"
}

const initialState = {
    text: ""
}


export const reducer = (state = initialState, action: ActionString) => {
    switch (action) {
        default:
            return state;
    }
};
