/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from '../views/RegisterForm';
import authActionCreators from '../../../actions/auth';
import { REGISTER_FORM } from '../../../constants/form';
import { validate } from '../services/validate';
import userSelectors from '../../../selectors/user';
import ErrorMessage from '../../../views/ErrorMessage';

class RegisterContainer extends Component {

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


    handleSubmit({ username, email, password }) {
        const { registerRequest } = this.props.actions;
        const userData = {
            username,
            email,
            password
        };
        registerRequest(userData);
    }

    render() {
        const { authData: { loading, error, message } } = this.props;
        const props = {
            onSubmit: this.handleSubmit,
            form: REGISTER_FORM,
            validate
        };
        return (
            <React.Fragment>
                <ErrorMessage message={message} isShown={error} />
                <RegisterForm {...props} loading={loading} />
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


RegisterContainer.propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    authData: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
