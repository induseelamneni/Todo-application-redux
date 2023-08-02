import {connect} from 'react-redux'
import { decrement, increment } from './ReduxDevTools/Action'

const Counter = ({local_variable,increment,decrement}) => {
    console.log(local_variable,"in")
    return(
        <>
        <h1>Redux Concepts</h1>
        <h2>Counter:{local_variable}</h2>
        <button type='button' onClick={increment}>Increment1</button>
        <button type='button' onClick={decrement}>Decrement</button>
        </>
    )
}

const mapStateToProps =(state) =>  ({
    local_variable : state.counter
  })

export default connect(mapStateToProps, {increment,decrement})(Counter)