import React from 'react';

import FilmsContainer from '../../containers/FilmsContainer';
import AppBarContainer from '../../../../../../components/containers/AppBarContainer';
import ServicesContainer from '../../containers/ServicesContainer';
import ScrollUpButton from '../../../../../../views/ScrollUpButton';

const Films = () => {
    return (
        <React.Fragment >
            <AppBarContainer />
            <ServicesContainer />
            <FilmsContainer />
            <ScrollUpButton />
        </ React.Fragment >
    );
};

export default Films;