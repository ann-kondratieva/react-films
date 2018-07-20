import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Info from '../views/Info';
import infoActionCreators from '../actions';
import infoSelectors from '../selectors';

class InfoContainer extends Component {

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        const { film } = this.props;
        const img = new Image();
        img.onload = this.handleLoad;
        img.src = film.images ? film.images[2].original : null;
    }

    handleLoad(event) {
        const { actions: { setBackground } } = this.props;
        const backgroundImage = event.path[0].src;
        setBackground(backgroundImage);
    }

    render() {
        const { film, backgroundImage } = this.props;
        const props = {
            film,
            backgroundImage
        };
        return (
            <Info {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        backgroundImage: infoSelectors.getBackgroundImage(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(infoActionCreators, dispatch),
    };
}

InfoContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired,
    backgroundImage: PropTypes.string.isRequired

};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);