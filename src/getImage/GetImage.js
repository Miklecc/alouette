import React from 'react';
import {connect} from 'react-redux'
import {fetchData} from '../getImage/getImageActions'

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
    mainContent: {
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

    // console.log('3 props +++++ ', props);
    return (
        <div style={container}>
            <p style={text}>Privet ot Alouette</p>
            <button style={button} onClick={() => props.fetchData(props.setTextReducer.enteredText)}>
                <p style={buttonText}>Run Buran</p>
            </button>
            <div style={mainContent}>
                {
                    props.getImageReducer.isFetching && <p>Loading</p>
                }
                {
                    props.getImageReducer.data.length ? (
                            props.getImageReducer.data.map((person, i) => {
                                return <div key={i}>
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

function mapStateToProps(state) {
    console.log('1 state +++++ ', state);
    return {
        getImageReducer: state.getImageReducer,
        setTextReducer: state.setTextReducer
    }
}

function mapDispatchToProps(dispatch) {
    // console.log('2 dispatch +++++ ', (fetchData()));
    return {
        fetchData: (phrase) => dispatch(fetchData(phrase))
    }
}

const GetImage = connect(
    mapStateToProps,
    mapDispatchToProps
)(getImageTemplate)

export default GetImage
