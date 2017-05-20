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
        let { props } = this;
        return (
            <div>
                <p>Privet ot Alouette</p>
                <form /*onSubmit={() => props.setTextSuccess()}*/>
                    <label>
                        Name:
                        <input type="text" value={props.setTextReducer.data.enteredText} onChange={() => props.setTextSuccess(event.target.value)}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <div>
                    { props.setTextReducer.data.enteredText }
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    console.log('state ++++ ', state);
    // TODO: object setTextReducer and appData comes -> use only appData ??
    // TODO: in html: fix for onSubmit()
    return {
        setTextReducer: state.setTextReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSetText: () => dispatch(fetchSetText()),
        setTextSuccess: () => dispatch(setTextSuccess())
    }
}

const SetText = connect(
    mapStateToProps,
    mapDispatchToProps
)(SetTextTemplate)

export default SetText