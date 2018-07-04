const validateRegister = (req, res, next) => {
    const { body: { username, email, password } } = req;
    if (!username || !password || !email) {
        return res.status(401).json({ success: false, message: 'Please pass username, email and password.' });
    } else next();
};

export default validateRegister;