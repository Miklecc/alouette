import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from '../getImage/getImageActions'
import { Button, Row, Col, Icon, Progress } from 'antd'

let styles = ({
    setMargin: {
        margin: 10
    }
});

const getImageTemplate = (props) => {

    const {
        setMargin
    } = styles;

    // see how to set up <Progress>: https://ant.design/components/progress/

    // console.log('3 props +++++ ', props);
    return (
        <div>
            <Row>
                <Col span={10} offset={2}>
                    <Button type="primary" icon="download" loading={false} onClick={() => props.fetchData(props.setTextReducer.enteredText)}>
                        Run Buran!
                    </Button>
                </Col>
                <Col span={10} offset={2}>
                    <Progress percent={50} strokeWidth={5} status="exception" />
                </Col>
            </Row>
            <Row className="getImage-iconAboveImage" style={setMargin}>
                <Col>
                    <Icon type="caret-down" />
                </Col>
            </Row>
            <Row>
                <div style={setMargin}>
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
            </Row>

        </div>
    )
};

function mapStateToProps(state) {
    // console.log('1 state +++++ ', state);
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
