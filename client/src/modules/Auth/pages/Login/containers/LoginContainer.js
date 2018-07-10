/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../views/LoginForm';
import loginActionCreators from '../actions';
import { LOGIN_FORM } from '../constants';
import createValidator from '../../../../../services/createValidator';
import { loginSchema } from '../constants';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({ email, password }) {
        const { loginRequest } = this.props.loginActions;
        const userData = {
            email,
            password
        };
        loginRequest(userData);
    }

    render() {
        const props = {
            onSubmit: this.handleSubmit,
            form: LOGIN_FORM,
            validate: createValidator(loginSchema)
        };
        return (
            <React.Fragment>
                <LoginForm {...props} />
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(loginActionCreators, dispatch),
    };
}


LoginContainer.propTypes = {
    history: PropTypes.object.isRequired,
    loginActions: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(LoginContainer);
