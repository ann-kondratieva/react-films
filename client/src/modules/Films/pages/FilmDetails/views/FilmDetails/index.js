import React from 'react';

import AppBarContainer from '../../../../../../components/containers/AppBarContainer';
import FilmDetailsContainer from '../../containers/FilmDetailsContainer';

const Film = () => {
    return (
        <React.Fragment >
            <AppBarContainer />
            <FilmDetailsContainer />
        </ React.Fragment >
    );
};

export default Film;