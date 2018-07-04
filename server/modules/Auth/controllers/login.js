import jwt from 'jsonwebtoken';

import { SECRET } from '../../../config/settings';
import User from '../model/user';

const login = async (req, res) => {
    const { body: { email, password } } = req;
    let user;
    try {
        user = await User.findOne({ email });
        if (!user) {
            res.statusMessage = 'Authentication failed. User not found.';
            return res.status(401).send();
        } else {
            let isMatch;
            isMatch = await user.comparePassword(password);
            if (isMatch) {
                var token = jwt.sign(user.toJSON(), SECRET);
                return res.json({ success: true, token: token });
            } else {
                res.statusMessage = 'Authentication failed. Wrong password.';
                return res.status(401).send();
            }
        }
    } catch (error) {
        throw error;
    }

};

export default login;