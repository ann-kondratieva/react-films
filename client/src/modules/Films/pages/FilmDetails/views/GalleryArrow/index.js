import React from 'react';
import PropTypes from 'prop-types';

const GalleryArrow = ({ currentSlide, slideCount, ...props }) => {
    return (
        <button  {...props} >
        </button>

    );
};

GalleryArrow.propTypes = {
    currentSlide: PropTypes.any,
    slideCount: PropTypes.any
};

export default GalleryArrow;