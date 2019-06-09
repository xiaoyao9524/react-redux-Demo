const defaultState = {
    inputValue: 'Hello World!!!',
    list: ['Hello', 'World!!']
};

export default (state = defaultState, action) => {
    console.log('action: ', action);
    const newState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case 'INPUT_CHANGE':
            newState.inputValue = action.value;
            break;
        case 'BTN_CLICK':
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            break;
        default: 
        console.log(action.type);
    }
    return newState;
}