import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { SEARCH_FORM } from '../constants';
import { SELECT_FORM } from '../constants';
import ServicesForm from '../views/ServicesForm';
import filmsActionCreators from '../actions';

class ServicesContainer extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        const { filmActions: { clearFilms, setHasMore } } = this.props;
        setHasMore(true);
        clearFilms();
    }

    render() {
        const searchProps = {
            onSubmit: this.onSubmit,
            form: SEARCH_FORM
        };
        const selectProps = {
            handleChange: this.onSubmit,
            form: SELECT_FORM
        };
        return (
            <ServicesForm searchProps={searchProps} selectProps={selectProps} />
        );
    }
};

function mapDispatchToProps(dispatch) {
    return {
        filmActions: bindActionCreators(filmsActionCreators, dispatch)
    };
}

ServicesContainer.propTypes = {
    filmActions: PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(ServicesContainer);