import React from 'react'
import {connect} from 'react-redux'
import {fetchSetText, setTextSuccess} from './setTextActions'

class SetTextTemplate extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    /*
     componentDidMount() { }
     componentWillUnmount() { }
     */

    render() {
        let {props} = this;
        return (
            <div>
                <p>Privet ot Alouette</p>
                <form /*onSubmit={() => props.setTextSuccess()}*/>
                    <label>
                        Name:
                        <input type="text" value={props.setTextReducer.enteredText}
                               onChange={(event) => props.setTextSuccess(event.target.value) }/>
                    </label>
                    {/*<input type="submit" value="Submit"/>*/}
                    {/*TODO: set up method to handle submit, ie. pass props.setTextSuccess() [NO NEED NOW] */}
                </form>
                <div>
                    Entered text:
                    { props.setTextReducer.enteredText }
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    // console.log('state ++++ ', state);
    // TODO: object setTextReducer and appData comes -> nope, it's fine to have reducers for each component and combineReducers 'joins' them
    // TODO: -> SKIPPED observable to setText to parse/map/etc to show autocomplete in search
    // TODO: styling -> connect to backend
    return {
        setTextReducer: state.setTextReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSetText: () => dispatch(fetchSetText()), // TODO: autocomplete
        setTextSuccess: (data) => dispatch(setTextSuccess(data))
    }
}

const SetText = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetTextTemplate)

export default SetText