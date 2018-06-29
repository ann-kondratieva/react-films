/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from '../views/RegisterForm';
import authActionCreators from '../../../actions/auth';
import { LOGIN_FORM } from '../../../constants/form';
import { validate } from '../services/validate';
import userSelectors from '../../../selectors/user';
import Loading from '../../../components/Loading';
import ErrorMessage from '../../../components/ErrorMessage';

class RegisterContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps({ auth: { success, token } }) {
        console.log(token);
        if (success) {
            localStorage.setItem('jwtToken', token);
            this.props.history.push('/');
        }
    }

    handleSubmit({ username, email, password }) {
        const { register } = this.props.actions;
        register(username, email, password);
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
                {auth.error && <ErrorMessage message='User already exists' />}
                {!auth.loading && <RegisterForm {...props} />}

            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        auth: userSelectors.getAuthData(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActionCreators, dispatch)
    };
}


RegisterContainer.propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object,
    auth: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
