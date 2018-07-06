/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RegisterForm from '../views/RegisterForm';
import registerActionCreators from '../actions';
import { REGISTER_FORM } from '../../../constants/form';
import createValidator from '../../../../../services/createValidator';
import { registerSchema } from '../../../constants/joiSchemas';
import userSelectors from '../../../selectors';
import ErrorMessage from '../../../views/ErrorMessage';

class RegisterContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            validate: createValidator(registerSchema)
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
        actions: bindActionCreators(registerActionCreators, dispatch)
    };
}


RegisterContainer.propTypes = {
    history: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    authData: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
