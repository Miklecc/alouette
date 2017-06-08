import React from 'react'
import { connect } from 'react-redux'
import { fetchSetText, setTextSuccess } from './setTextActions'
import { Form, Icon, Input, Button } from 'antd'

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
        const { getFieldDecorator, getFieldsError,
            getFieldError, isFieldTouched } = props.form;

        // Only show error after a field is touched.
        const setTextFieldError = isFieldTouched('setTextField') && getFieldError('setTextField');

        return (
            <div>
                <Form layout="inline" onSubmit={this.handleSubmit} className="setText-form">
                    Privet ot Alouette
                            <hr className="setText-divider" />

                    <FormItem
                        label='Enter phrase'
                        colon={false}
                        validateStatus={setTextFieldError ? 'error' : ''}
                        help={setTextFieldError || ''}>
                        {getFieldDecorator('setTextField', {
                            rules: [{
                                required: false,
                                message: 'Please input text with rule [1-10]',
                                pattern: /^([1-9]|10)$/g
                            }],
                            initialValue: props.setTextReducer.enteredText
                        })(
                            <Input
                                prefix={<Icon type="aliwangwang-o"
                                    style={{ fontSize: 13 }} />}
                                placeholder="Text to process" />
                            )}
                    </FormItem>
                    <FormItem
                        className="setText-entered-text"
                        label='Your phrase is'
                        colon={false}>
                        <Input
                            value={props.setTextReducer.enteredText}
                            className="setText-entered-text-input" />
                    </FormItem>
                </Form>
            </div>
        );
    }
}


function mapStateToProps(state) {
    // console.log('state ++++ ', state);
    // TODO: object setTextReducer and appData comes -> nope, it's fine to have reducers for each component and 'combineReducers' joins them
    // TODO: -> SKIPPED observable to setText to parse/map/etc to show autocomplete in search
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

const CreateFormFromTextTemplate = Form.create({
    onFieldsChange(props, fields) {
        // console.log('onFieldsChange FIELDS ==', fields);
        props.setTextSuccess(fields.setTextField.value);
    },
})(SetTextTemplate);

const SetText = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateFormFromTextTemplate)

export default SetText