import React from 'react';

import FilmsContainer from '../../containers/FilmsContainer';
import AppBar from '../../../../../../components/AppBar';
import ServicesContainer from '../../containers/ServicesContainer';
import ScrollUpButton from '../../../../../../views/ScrollUpButton';

const Films = () => {
    return (
        <React.Fragment >
            <AppBar />
            <ServicesContainer />
            <FilmsContainer />
            <ScrollUpButton />
        </ React.Fragment >
    );
};

export default Films;