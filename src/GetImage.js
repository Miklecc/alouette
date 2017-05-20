import React from 'react';
import { connect } from 'react-redux'
import { fetchData, getInput } from './actions'

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

const getImageTemplate = (props) => {

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

const GetImage = connect(
    mapStateToProps,
    mapDispatchToProps
)(getImageTemplate)

export default GetImage
