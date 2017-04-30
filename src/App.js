import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux'
import { fetchData, getInput } from './actions'
import { actions } from './actions'

let styles = ({
    container: {
        marginTop: 20
    },
    text: {
        textAlign: 'center'
    },
    button: {
        height: 60,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b7eff'
    },
    buttonText: {
        color: 'white'
    },
    mainContent : {
        margin: 10
    }
});

class Input extends React.Component {
    constructor(props) {
        super(props);
        console.log('super props +++++++ ', props);
        // this.state = {date: new Date()};
    }
/*

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
*/
    // it's DUMB now because of passing dispatcher via props
    render() {
        return (
            <button onClick={this.props.getInput}>TEST</button>
        );
    }
}

const App = (props) => {

    const {
        container,
        text,
        button,
        buttonText,
        mainContent
    } = styles;

    console.log('3 props +++++ ', props);
    return (
        <div style={container}>
            <p style={text}>Privet ot Alouette</p>
            <Input getInput={props.getInput} />
            <button style={button} onClick={() => props.fetchData()}>
                <p style={buttonText}>Run Buran</p>
            </button>
            <div style={mainContent}>
                {
                    props.appData.isFetching && <p>Loading</p>
                }
                {
                    props.appData.data.length ? (
                            props.appData.data.map((person, i) => {
                                return <div key={i} >
                                    <p>What: {person.body}</p>
                                    <p>Inside: {person.title}</p>
                                </div>
                            })
                        ) : null
                }
            </div>
        </div>
    )
};

function mapStateToProps (state) {
    // console.log('1 state +++++ ', state);
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    // console.log('2 dispatch +++++ ', (fetchData()));
    return {
        fetchData: () => dispatch(fetchData()),
        getInput: () => dispatch(getInput())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
