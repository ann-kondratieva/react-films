import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import filmActionCreators from '../actions';
import filmSelectors from '../selectors';
import Film from '../views/Film';

class FilmDetailsContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { actions: { getFilmRequest } } = this.props;
        const id = this.props.match.params.id;
        getFilmRequest({ id });
    }

    render() {
        const { filmState: { item, loading } } = this.props;
        const props = {
            film: item,
            loading
        };
        return (
            <React.Fragment >
                <Film {...props} />
            </ React.Fragment >
        );
    }
};

function mapStateToProps(state) {
    return {
        filmState: filmSelectors.getFilmState(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch),
    };
}

FilmDetailsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    filmState: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmDetailsContainer));