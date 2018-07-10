/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from '../views/RegisterForm';
import registerActionCreators from '../actions';
import { REGISTER_FORM } from '../constants';
import createValidator from '../../../../../services/createValidator';
import { registerSchema } from '../constants';

class RegisterContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({ username, email, password }) {
        const { registerRequest } = this.props.registerActions;
        const userData = {
            username,
            email,
            password
        };
        registerRequest(userData);
    }

    render() {
        const props = {
            onSubmit: this.handleSubmit,
            form: REGISTER_FORM,
            validate: createValidator(registerSchema)
        };
        return (
            <React.Fragment>
                <RegisterForm {...props} />
            </React.Fragment>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        registerActions: bindActionCreators(registerActionCreators, dispatch),
    };
}


RegisterContainer.propTypes = {
    history: PropTypes.object.isRequired,
    registerActions: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
