import React from 'react';
import PropTypes from 'prop-types';
import ImageLoader from 'react-load-image';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from '@material-ui/core/Grid';
import Slider from 'react-slick';
import GalleryArrow from '../GalleryArrow';
import ImageDialog from '../ImageDialog';
import placeholder from '../../../../../../../../output.svg';
import Preloader from '../../../../../../../../views/Preloader';

const Gallery = ({ images, classes, onImageClick, onImageClose, gallery: { image, isOpen } }) => {
    let settings = {
        prevArrow: <GalleryArrow />,
        nextArrow: <GalleryArrow />,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };
    const dialogProps = {
        onClose: onImageClose,
        open: isOpen,
        image
    };
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.container}>
            <Grid item xs={12}  >
                <Slider {...settings} >
                    {images ? images.map((image, index) =>
                        <div key={index}>
                            <ImageLoader
                                src={image.original}
                                className={classes.imageContainer}
                            >
                                <img className={classes.image} onClick={onImageClick} alt={image.original} />
                                <Preloader className={classes.image} image={placeholder} />
                                <Preloader className={classes.image} image={placeholder} />
                            </ImageLoader>
                        </div>
                    ) : ''}
                </Slider>
            </Grid>
            <ImageDialog {...dialogProps} />
        </Grid>

    );
};

Gallery.propTypes = {
    classes: PropTypes.object.isRequired,
    images: PropTypes.array,
    onImageClick: PropTypes.func.isRequired,
    onImageClose: PropTypes.func.isRequired,
    gallery: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery);