import React from 'react';

import AppBar from '../../../../../../components/AppBar';
import FilmDetailsContainer from '../../containers/FilmDetailsContainer';

const Film = () => {
    return (
        <React.Fragment >
            <AppBar />
            <FilmDetailsContainer />
        </ React.Fragment >
    );
};

export default Film;