import React from 'react';
import ScrollToTop from 'react-scroll-up';

import Button from '@material-ui/core/Button';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const ScrollUpButton = () => {
    return (
        <ScrollToTop showUnder={160}>
            <Button variant="fab" color="primary" aria-label="up" >
                <ArrowUpward />
            </Button>
        </ScrollToTop>
    );
};

export default ScrollUpButton;