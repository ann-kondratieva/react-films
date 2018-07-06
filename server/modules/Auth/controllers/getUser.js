const getUser = (req, res) => {
    const { headers: { authorization }, user } = req;
    const token = authorization;
    if (token) {
        user.password = null;
        res.json(user);
    } else {
        res.statusMessage = 'Unauthorized.';
        return res.status(403).send();
    }
};

export default getUser;