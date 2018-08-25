import React, { Component } from 'react';

import FormField from '../../utils/Form/formfield';
import { update, generateData, isFormValid, populateFields } from '../../utils/Form/formActions';

import { connect } from 'react-redux';

class UpdateSiteNfo extends Component {

    state = {
        formError: false,
        formSuccess:false,
        formdata:{
            address:{
                element: 'input',
                value: '',
                config:{
                    label: 'Address',
                    name: 'address_input',
                    type: 'text',
                    placeholder: 'Enter the site address'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showLabel:true
            },
            hours:{
                element: 'input',
                value: '',
                config:{
                    label: 'Working hours',
                    name: 'hours_input',
                    type: 'text',
                    placeholder: 'Enter the site working hours'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showLabel:true
            },
            phone:{
                element: 'input',
                value: '',
                config:{
                    label: 'Phone',
                    name: 'phone_input',
                    type: 'text',
                    placeholder: 'Enter the site phone number'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showLabel:true
            },
            email:{
                element: 'input',
                value: '',
                config:{
                    label: 'Store email',
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:'',
                showLabel: true
            }
        }
    }

    updateForm = (element) => {
        const newFormdata = update(element, this.state.formdata,'site_info');
        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    submitForm = (event) =>{
        event.preventDefault();

        let dataToSubmit = generateData(this.state.formdata, 'site_info');
        let formIsValid = isFormValid(this.state.formdata, 'site_info');

        if(formIsValid){
           console.log(dataToSubmit)
            
        } else {
            this.setState({
                formError: true
            })
        }      
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=> this.submitForm(event)}>
                <h1>Site info</h1>
                 <FormField
                        id={'address'}
                        formdata={this.state.formdata.address}
                        change={(element)=> this.updateForm(element)}
                    />
                    <FormField
                        id={'hours'}
                        formdata={this.state.formdata.hours}
                        change={(element)=> this.updateForm(element)}
                    />
                    <FormField
                        id={'phone'}
                        formdata={this.state.formdata.phone}
                        change={(element)=> this.updateForm(element)}
                    />
                    <FormField
                        id={'email'}
                        formdata={this.state.formdata.email}
                        change={(element)=> this.updateForm(element)}
                    />
                    <div>
                        {
                            this.state.formSuccess ?
                            <div className="form_success">
                                Success! Information Updated.
                            </div>
                            :null
                        }
                        { this.state.formError ? 
                            <div className="error_label">
                                Please check your data
                            </div>
                                        
                        :null}
                        <button onClick={(event)=> this.submitForm(event)}>
                            Update Site Info
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        site: state.site
    }
}

export default connect()(UpdateSiteNfo);