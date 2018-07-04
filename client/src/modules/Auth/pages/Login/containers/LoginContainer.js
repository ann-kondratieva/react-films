/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../views/LoginForm';
import authActionCreators from '../../../actions/auth';
import { LOGIN_FORM } from '../../../constants/form';
import { validate } from '../services/validate';
import ErrorMessage from '../../../views/ErrorMessage';
import userSelectors from '../../../selectors/user';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps({ authData: { success } }) {
        if (success) {
            this.props.history.push('/');
        }
    }

    componentDidMount() {
        const { clearAuthData } = this.props.actions;
        clearAuthData();
    }

    handleSubmit({ email, password }) {
        const { loginRequest } = this.props.actions;
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
            validate
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
        actions: bindActionCreators(authActionCreators, dispatch)
    };
}


LoginContainer.propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    authData: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
