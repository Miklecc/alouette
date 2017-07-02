import React from 'react';
import { connect } from 'react-redux'
import { fetchData, hideObject } from '../getImage/getImageActions'
import { Button, Row, Col, Icon, Progress } from 'antd'

let styles = ({
    setMargin: {
        margin: 10
    }
});

class getImageTemplate extends React.Component {
    // const getImageTemplate = (props) => {

    // see how to set up <Progress>: https://ant.design/components/progress/
    // console.log('3 props +++++ ', props);

    render() {


        let { props } = this;

        const { setMargin } = styles;

        return (
            <div>
                <Row>
                    <Col span={10} offset={2}>
                        <Button type="primary" icon="download" loading={props.getImageReducer.isFetching} onClick={
                            () => {
                                props.fetchData(props.setTextReducer.enteredText);
                                {/* It is attempt to show/hide <object> on src change */ }
                                {/*props.hideObject(true);
                                props.hideObject(false);*/}
                            }}>
                            {props.getImageReducer.isFetching ? "Loading" : "Run Buran!"}
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
                        {/*A_coloured_voting_box*/}
                        <iframe frameBorder="0" scrolling="no"
                            className={props.getImageReducer.shouldHide ? 'hidden getImage-iframe' : 'getImage-iframe'} src={'https://upload.wikimedia.org/wikipedia/en/0/01/' + props.getImageReducer.data + '.svg'}></iframe>
                        {/*<object className={props.getImageReducer.shouldHide ? 'hidden' : ''} type='image/svg+xml' data={'https://upload.wikimedia.org/wikipedia/en/0/01/' + props.getImageReducer.data + '.svg'}></object>*/}
                    </div>
                </Row>

            </div>
        )
    }

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
        hideObject: (boolean) => dispatch(hideObject(boolean)),
        fetchData: (phrase) => dispatch(fetchData(phrase))
    }
}

const GetImage = connect(
    mapStateToProps,
    mapDispatchToProps
)(getImageTemplate)

export default GetImage
