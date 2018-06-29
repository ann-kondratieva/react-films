/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginForm from '../views/LoginForm';
import authActionCreators from '../../../actions/auth';
import { LOGIN_FORM } from '../../../constants/form';
import { validate } from '../services/validate';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';
import userSelectors from '../../../selectors/user';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps({ auth: { success, token } }) {
        if (success) {
            localStorage.setItem('jwtToken', token);
            this.props.history.push('/');
        }
    }

    handleSubmit({ email, password }) {
        const { login } = this.props.actions;
        login(email, password);
    }

    render() {
        const { auth } = this.props;
        const props = {
            onSubmit: this.handleSubmit,
            form: LOGIN_FORM,
            validate
        };
        return (
            <React.Fragment>
                {auth.loading && <Loading />}
                {auth.error && <ErrorMessage message='Wrong data' />}
                {!auth.loading && <LoginForm {...props} />}
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: userSelectors.getAuthData(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActionCreators, dispatch)
    };
}


LoginContainer.propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object,
    auth: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
