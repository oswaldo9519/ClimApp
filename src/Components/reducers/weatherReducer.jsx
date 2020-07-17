const initialState = {
    data = []
}

export default (state = initialState, action) => {
    switch (action.payload) {
        case 'SET_WEATHER_INFO' :
            return Object.assign({}, state, {
                data: action.payload
            })
        default:
            console.log('No hay info.');
    }
}