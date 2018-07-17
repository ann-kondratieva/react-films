import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import filmActionCreators from '../actions';
import Gallery from '../views/Gallery';
import filmSelectors from '../selectors';

class GalleryContainer extends Component {

    constructor(props) {
        super(props);
        this.onImageClick = this.onImageClick.bind(this);
        this.onImageClose = this.onImageClose.bind(this);
    }

    onImageClick(event) {
        const { openImage } = this.props.actions;
        openImage(event.target.src);
    }

    onImageClose() {
        const { closeImage } = this.props.actions;
        closeImage();
    }

    render() {
        const { gallery, film } = this.props;
        const props = {
            film,
            gallery,
            onImageClick: this.onImageClick,
            onImageClose: this.onImageClose
        };
        return (
            <Gallery {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        gallery: filmSelectors.getGalleryState(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(filmActionCreators, dispatch),
    };
}

GalleryContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    gallery: PropTypes.object.isRequired,
    film: PropTypes.object.isRequired

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GalleryContainer));