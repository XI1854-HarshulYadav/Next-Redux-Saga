// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// import { connect } from 'react-redux';

// import { MOB_NO_REGEX, FULL_NAME_REGEX, EMAIL_REGEX, PINCODE_REGEX } from '../../lib/validation';

// const BasicDetailsForm = (props) => {
//     console.log('props BasicDetailsForm', props)

//     const handleChange = ({ currentTarget: input }) => {

//     }

//     const focusOut = ({ currentTarget: input }) => {

//     }

//     const handleSubmit = event => {
//         event.preventDefault();
//     }

//     return(
//         <>
//             <div className="heading text-center mb-5">Get Instant Quote</div>
//             <Form noValidate onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>Mobile Number</Form.Label>
//                     <Form.Control 
//                         // isInvalid={this.state.error?.mobileNumber}
//                         placeholder="Mobile Number" name="mobileNumber"
//                         // value={this.state.data?.mobileNumber}
//                         type='tel' required={true} pattern={MOB_NO_REGEX}
//                         autoComplete='off' onChange={handleChange} onBlur={focusOut} />
//                     <Form.Control.Feedback type="invalid">
//                         {/* {this.state.error?.mobileNumber} */}
//                     </Form.Control.Feedback>
//                 </Form.Group>
//             </Form>
//         </>
//     )

// }

// export default connect(state => state)(BasicDetailsForm);

import React from 'react';

import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

// import {
//     submitBasicForm
// } from '../../../store/public/health-insurance/actions';

import { MOB_NO_REGEX, FULL_NAME_REGEX, EMAIL_REGEX, PINCODE_REGEX } from '../../lib/validation';
// import AddFamilyMembers from './addFamilyMembers';
import {
    getBannerNotes
} from '../../store/data/display/actions';

class BasicDetailsForm extends React.PureComponent {

    state = {
        error: {},
        data: {
            mobileNumber: '',
            emailId: '',
            full_name: '',
            pincode: ''
        },
        family_data: []
    }

    componentDidMount() {
        console.log('provider', this.props.formData);
        this.props.dispatchCheck({
            provider: 'RELIGARE'
        })
        if(this.props.formData) {
            if(Object.keys(this.props.formData).length > 0) {
                this.setState({
                    data: this.props.formData?.basic_details?.basic_data,
                    family_data: this.props.formData?.basic_details?.family_data
                });
            }
        }
    }

    componentDidUpdate(prevProps) {
        // console.log('this.props.basic_form_submitted', this.props.basic_form_submitted);
        // if(prevProps.basic_form_submitted !== this.props.basic_form_submitted && this.props.basic_form_submitted === true) {
        //     this.props.formSubmitted({
        //         basic_data: this.state.data,
        //         family_data: this.state.family_data
        //     })
        // }
    }

    handleChange = ({ currentTarget: input }) => {
        console.log('input', input.placeholder)
        const data = { ...this.state.data };
        const error = { ...this.state.error };
        data[input.name] = input.value;

        this.setState({ data });
        if (input.required === true) {
            if (input.value) {
                error[input.name] = null;
                this.setState({
                    error
                });
            } else {
                error[input.name] = input.placeholder + ' is Required';
                this.setState({
                    error
                });
            }
        }
    }

    focusOut = ({ currentTarget: input }) => {
        console.log('e t', new RegExp(input.pattern));
        if (input.value) {
            const error = { ...this.state.error };
            if (new RegExp(input.pattern).test(input.value) === true) {
                error[input.name] = null;
                this.setState({
                    error
                });
            } else {
                error[input.name] = `Incorrect Format`;
                this.setState({
                    error
                });
            }
        }
    }

    renderModal = () => {
        this.setState({
            showModal: true
        });
    }

    onModalClose = show => {
        this.setState({
            showModal: false
        });
    }

    handleMemberInfoSubmit = data => {
        console.log('handleMemberInfoSubmit data', data);
        this.setState({
            family_data: data
        }, () => {
            console.log('handleMemberInfoSubmit state', this.state);
            this.onModalClose();
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log('Form Submit Click', form.checkValidity(), this.state);
        let error = { ...this.state.error };
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            if (this.state.data?.mobileNumber == null || !this.state.data?.mobileNumber) {
                error.mobileNumber = 'Mobile Number is required';
            } else {
                if (new RegExp(MOB_NO_REGEX).test(this.state.data?.mobileNumber) === false) {
                    error.mobileNumber = 'Invalid format';
                }
            }
            if (this.state.data?.emailId == null || !this.state.data?.emailId) {
                error.emailId = 'Email id is required';
            } else {
                if (new RegExp(EMAIL_REGEX).test(this.state.data?.emailId) === false) {
                    error.emailId = 'Invalid format';
                }
            }
            if (this.state.data?.full_name == null || !this.state.data?.full_name) {
                error.full_name = 'Full Name is required';
            } else {
                if (new RegExp(FULL_NAME_REGEX).test(this.state.data?.full_name) === false) {
                    error.full_name = 'Invalid format';
                }
            }
            if (this.state.data?.pincode == null || !this.state.data?.pincode) {
                error.pincode = 'Pincode is required';
            } else {
                if (new RegExp(PINCODE_REGEX).test(this.state.data?.pincode) === false) {
                    error.pincode = 'Invalid format';
                }
            }
            this.setState({
                error
            })
        } else {
            if(this.state.family_data?.length > 0) {
                console.log('ready to store data into reducer');
                this.props.dispatchSubmitForm({
                    basic_data: this.state.data,
                    family_data: this.state.family_data
                })
            } else {

            }
        }
    }

    render() {
        return (
            <>
                <div className="heading text-center mb-5">Get Instant Quote</div>
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control isInvalid={this.state.error?.mobileNumber}
                            placeholder="Mobile Number" name="mobileNumber"
                            value={this.state.data?.mobileNumber}
                            type='tel' required={true} pattern={MOB_NO_REGEX}
                            autoComplete='off' onChange={this.handleChange} onBlur={this.focusOut} />
                        <Form.Control.Feedback type="invalid">
                            {this.state.error?.mobileNumber}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email ID</Form.Label>
                        <Form.Control isInvalid={this.state.error?.emailId}
                            placeholder="Email ID" name="emailId"
                            value={this.state.data?.emailId}
                            type='email' required={true} pattern={EMAIL_REGEX}
                            autoComplete='off' onChange={this.handleChange} onBlur={this.focusOut} />
                        <Form.Control.Feedback type="invalid">
                            {this.state.error?.emailId}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control isInvalid={this.state.error?.full_name}
                            placeholder="Name" name="full_name"
                            value={this.state.data?.full_name}
                            type='text' required={true} pattern={FULL_NAME_REGEX}
                            autoComplete='off' onChange={this.handleChange} onBlur={this.focusOut} />
                        <Form.Control.Feedback type="invalid">
                            {this.state.error?.full_name}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control isInvalid={this.state.error?.pincode}
                            placeholder="Pincode" name="pincode"
                            value={this.state.data?.pincode}
                            type='number' required={true} pattern={PINCODE_REGEX}
                            autoComplete='off' onChange={this.handleChange} onBlur={this.focusOut} />
                        <Form.Control.Feedback type="invalid">
                            {this.state.error?.pincode}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Members to be insured</Form.Label>
                        <Form.Control
                            placeholder="Members to be insured" name="pincode"
                            type='text' onClick={this.renderModal} />
                        <Form.Control.Feedback type="invalid">
                            {this.state.error?.members}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* {this.state.showModal === true &&
                        <AddFamilyMembers
                            title="Add family members to be insured"
                            members={this.state.family_data}
                            onFamilySubmit={this.handleMemberInfoSubmit}
                            onClose={this.onModalClose}
                        />
                    } */}

                    <Button variant="primary" size="lg" block type="submit">
                        Calculate Premium
                    </Button>

                </Form>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        // basic_form_submitted: state.healthInsuranceReducer.basic_form_submitted
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatchSubmitForm: data => dispatch(submitBasicForm(data)),
        dispatchCheck: data => dispatch(getBannerNotes(data)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicDetailsForm);