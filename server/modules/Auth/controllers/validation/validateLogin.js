const validateLogin = (req, res, next) => {
    const { body: { email, password } } = req;
    if (!password || !email) {
        return res.status(401).json({ success: false, message: 'Please pass email and password.' });
    } else next();
};

export default validateLogin;