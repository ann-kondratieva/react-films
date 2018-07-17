import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Gallery from '../views/Gallery';
import filmSelectors from '../../../selectors';
import galleryActionCreators from '../actions';

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
        const { gallery, images } = this.props;
        const props = {
            images,
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
        actions: bindActionCreators(galleryActionCreators, dispatch),
    };
}

GalleryContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    gallery: PropTypes.object.isRequired,
    images: PropTypes.array

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GalleryContainer));