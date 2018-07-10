import jwt from 'jsonwebtoken';

import { SECRET } from '../../../modules/Auth/config/settings';

const login = async (req, res) => {
    let { user } = req;
    console.log(user);
    if (user) {
        var token = jwt.sign(user.toJSON(), SECRET);
        user.password = null;
        return res.json({ token, user });
    } else res.json({ message: 'none user' });

};

export default login;