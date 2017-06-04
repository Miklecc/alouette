import React from 'react'
import {connect} from 'react-redux'
import {fetchSetText, setTextSuccess} from './setTextActions'
import { Form, Icon, Input, Button, Row, Col } from 'antd'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SetTextTemplate extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.form.validateFields();
    }
    //  componentWillUnmount() { }
    // TODO: img src: http://rammb.cira.colostate.edu/dev/hillger/Alouette-1_and_TAVE_cover5.jpg

    render() {

        let { props } = this;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');

        return (
            <div>
                <Row>
                    <Col className="setText-background-image-container" span={24}>
                        <img className="setText-background-image"
                         src={'http://rammb.cira.colostate.edu/dev/hillger/Alouette-1_and_TAVE_cover5.jpg'}
                         alt="Poehali!"/>
                    </Col>
                </Row>
                <Row className="gutter-row" gutter={40}>
                    <Col span={10}>
                        <Form layout="inline" onSubmit={this.handleSubmit} className="setText-form">
                            Privet ot Alouette
                            <hr className="setText-divider" />

                            <FormItem
                                label='Enter your phrase'
                                validateStatus={userNameError ? 'error' : ''}
                                help={userNameError || ''}>
                                {getFieldDecorator('userName', {
                                    rules: [{
                                        required: true,
                                        message: 'Please input text with rule [1-10]',
                                        pattern: /[1-10]/g
                                    }],
                                })(
                                    <Input prefix={<Icon type="aliwangwang-o" style={{ fontSize: 13 }} />} placeholder="Text to process" />
                                    )}
                            </FormItem>
                            <FormItem
                                className="setText-entered-text"
                                label='Entered text is'>
                                 <Input className="setText-entered-text-input"/>
                            </FormItem>
                            <FormItem>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}>
                                    Log in
                                 </Button>
                            </FormItem>
                        </Form>
                    </Col>
                    <Col span={12}></Col>
                </Row>
                <Row className="gutter-row" gutter={40}>
                    <Col span={10}></Col>
                    <Col span={12}></Col>
                </Row>
                
                <form /*onSubmit={() => props.setTextSuccess()}*/>
                    <label>
                        Name:
                        <input type="text" value={props.setTextReducer.enteredText}
                            onChange={(event) => props.setTextSuccess(event.target.value)} />
                    </label>
                    {/*<input type="submit" value="Submit"/>*/}
                    {/*TODO: set up method to handle submit, ie. pass props.setTextSuccess() [NO NEED NOW] */}
                </form>
                <div>
                    Entered text:
                    {props.setTextReducer.enteredText}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    // console.log('state ++++ ', state);
    // TODO: object setTextReducer and appData comes -> nope, it's fine to have reducers for each component and 'combineReducers' joins them
    // TODO: -> SKIPPED observable to setText to parse/map/etc to show autocomplete in search
    // TODO: Update ejected webpack configs, etc and scripts with this: https://github.com/ant-design/create-react-app-antd/blob/master/config/env.js
    // TODO: to make antd work
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

const CreateFormFromTextTemplate = Form.create()(SetTextTemplate);

const SetText = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateFormFromTextTemplate)

export default SetText