const validateRegister = (req, res, next) => {
    const { body: { username, email, password } } = req;
    if (!username || !password || !email) {
        res.statusMessage = 'Please pass username, email and password.';
        return res.status(401).send();
    } else next();
};

export default validateRegister;