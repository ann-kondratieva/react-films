const getUser = (req, res) => {
    const { headers: { authorization }, user } = req;
    const token = authorization;
    if (token) {
        user.password = null;
        res.json(user);
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
};

export default getUser;