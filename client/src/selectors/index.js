import { createSelector } from 'reselect';

import userSelectors from '../modules/Auth/selectors';

const isAuth = createSelector(
    [userSelectors.getToken, userSelectors.getUserData],
    (token, userdata) => {
        return (token !== null && userdata !== null);
    }
);

const selectors = {
    isAuth
};

export default selectors;