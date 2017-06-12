import React from 'react'
import { Row, Col } from 'antd'
import SetText from '../setText/SetText'
import GetImage from '../getImage/GetImage'

class Main extends React.Component {

    // TODO: img src: http://rammb.cira.colostate.edu/dev/hillger/Alouette-1_and_TAVE_cover5.jpg
    render() {

        return (
            <div>
                <Row>
                    <Col className="setText-background-image-container" span={24}>
                        <img className="setText-background-image"
                            src={''}
                            alt="Poehali!" />
                    </Col>
                </Row>
                <Row className="gutter-row main-getImage-row" gutter={40}>
                    <Col span={10}>
                        <SetText />
                    </Col>
                </Row>
                <Row className="gutter-row main-getImage-row" gutter={40}>
                    <Col span={10}>
                        <GetImage />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main