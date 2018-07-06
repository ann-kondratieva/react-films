const validateLogin = (req, res, next) => {
    const { body: { email, password } } = req;
    if (!password || !email) {
        res.statusMessage = 'Please pass email and password.';
        return res.status(401).send();
    } else next();
};

export default validateLogin;