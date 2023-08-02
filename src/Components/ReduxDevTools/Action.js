export const increment = () => async dispatch => {
    dispatch({
        type : 'increment'
    })
}

export const decrement = () => async dispatch => {
    dispatch( {
        type : 'decrement'
    })
}