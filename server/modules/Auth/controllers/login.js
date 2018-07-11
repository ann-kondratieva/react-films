import jwt from 'jsonwebtoken';

import { SECRET } from '../../../modules/Auth/config/settings';

const login = async (req, res) => {
    let { user } = req;
    var token = jwt.sign(user.toJSON(), SECRET);
    user.password = null;
    return res.json({ token, user });
};

export default login;