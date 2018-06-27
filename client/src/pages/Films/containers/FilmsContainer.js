import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import filmActionCreators from '../../../actions/films';
import filmSelectors from '../../../selectors/films';
import FilmsList from '../views/FilmsList';

class FilmsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.actions.getFilms();
    }

    render() {
        const { films } = this.props;
        const props = {
            films: films
        };
        return (
            <FilmsList {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        films: filmSelectors.getFilms(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch)
    };
}

FilmsContainer.propTypes = {
    actions: PropTypes.object,
    films: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer);