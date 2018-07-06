/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../views/LoginForm';
import loginActionCreators from '../actions';
import authActionCreators from '../../../actions';
import { LOGIN_FORM } from '../../../constants/form';
import createValidator from '../../../../../services/createValidator';
import { loginSchema } from '../../../constants/joiSchemas';
import ErrorMessage from '../../../views/ErrorMessage';
import userSelectors from '../../../selectors';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { clearAuthData } = this.props.authActions;
        clearAuthData();
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
        const { authData: { loading, error, message } } = this.props;
        const props = {
            onSubmit: this.handleSubmit,
            form: LOGIN_FORM,
            validate: createValidator(loginSchema)
        };
        return (
            <React.Fragment>
                <ErrorMessage message={message} isShown={error} />
                <LoginForm {...props} loading={loading} />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        authData: userSelectors.getAuthData(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(loginActionCreators, dispatch),
        authActions: bindActionCreators(authActionCreators, dispatch),
    };
}


LoginContainer.propTypes = {
    history: PropTypes.object.isRequired,
    loginActions: PropTypes.object.isRequired,
    authActions: PropTypes.object.isRequired,
    authData: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
