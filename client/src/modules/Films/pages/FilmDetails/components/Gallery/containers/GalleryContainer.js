import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Gallery from '../views/Gallery';
import selectors from '../selectors';
import galleryActionCreators from '../actions';

class GalleryContainer extends Component {

    constructor(props) {
        super(props);
        this.onImageClick = this.onImageClick.bind(this);
        this.onImageClose = this.onImageClose.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
    }

    onImageClick(event) {
        const { openImage } = this.props.actions;
        openImage(event.target.src);
    }

    onImageClose() {
        const { closeImage } = this.props.actions;
        closeImage();
    }

    onNextClick() {
        const { changeImage } = this.props.actions;
        changeImage({ isNext: true });
    }

    onPrevClick() {
        const { changeImage } = this.props.actions;
        changeImage({ isNext: false });
    }

    render() {
        const { gallery, images } = this.props;
        const props = {
            images,
            gallery,
            onImageClick: this.onImageClick,
            onImageClose: this.onImageClose,
            onNextClick: this.onNextClick,
            onPrevClick: this.onPrevClick
        };
        return (
            <Gallery {...props} />
        );
    }
};

function mapStateToProps(state) {
    return {
        gallery: selectors.getGalleryState(state)
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