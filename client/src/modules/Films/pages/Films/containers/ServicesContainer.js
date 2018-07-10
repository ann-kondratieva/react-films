import React, { Component } from 'react';
/* import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; */

import { SEARCH_FORM } from '../constants';
import { SELECT_FORM } from '../constants';
import ServicesForm from '../views/ServicesForm';

class ServicesContainer extends Component {

    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    onSearchSubmit({ search }) {
        console.log(search);
    }

    onSelectChange(event) {
        console.log(event.target.value);
    }

    render() {
        const searchProps = {
            onSubmit: this.onSearchSubmit,
            form: SEARCH_FORM
        };
        const selectProps = {
            handleChange: this.onSelectChange,
            form: SELECT_FORM
        };
        return (
            <ServicesForm searchProps={searchProps} selectProps={selectProps} />
        );
    }
};

/* function mapStateToProps(state) {
    return {
        filmsState: filmSelectors.getFilmsState(state),
        username: userSelectors.getUsername(state),
        token: userSelectors.getToken(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filmActions: bindActionCreators(filmsActionCreators, dispatch),
        actions: bindActionCreators(globalActionCreators, dispatch),
    };
} */

ServicesContainer.propTypes = {
    //actions: PropTypes.object.isRequired,
    //history: PropTypes.object.isRequired
};

export default /* connect(mapStateToProps, mapDispatchToProps) */(ServicesContainer);