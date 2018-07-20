import React from 'react';

import AppBar from '../../../../../../components/AppBar';
import FilmDetailsContainer from '../../containers/FilmDetailsContainer';
import ScrollUpButton from '../../../../../../views/ScrollUpButton';

const Film = () => {
    return (
        <React.Fragment >
            <AppBar />
            <FilmDetailsContainer />
            <ScrollUpButton />
        </ React.Fragment >
    );
};

export default Film;