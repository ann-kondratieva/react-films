import jwt from 'jsonwebtoken';

import { SECRET } from '../../../config/settings';
import User from '../model/user';

const register = async (req, res) => {
    const { body: { username, email, password } } = req;
    try {
        let userWithEmail = await User.findOne({ email });
        let userWithUsername = await User.findOne({ username });
        if (userWithEmail || userWithUsername) {
            res.statusMessage = 'User already exists.';
            return res.status(401).send();
        }
        let newUser = new User({
            username,
            email,
            password
        });
        await newUser.save();
        let token = jwt.sign(newUser.toJSON(), SECRET);
        return res.json({ success: true, token: token });
    } catch (error) {
        throw error;
    }
};

export default register;