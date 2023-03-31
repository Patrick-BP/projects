//////// valdation token ////////


exports.validateToken = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).send({ err: 'unauthorized' })
    }
    const arr = header.split(" ");
    if (arr.length !== 2) {
        return res.status(500).send("bearer schema is not valid");
    }
    const token = arr[1];
    try {
        const user = jwt.verify(token, PRIVATE_KEY)
        if (user.role === 'user') {
            next()
        }
        res.status(403).send('not allowed')
        // next();  

    } catch (err) {
        return res.status(403).send({ err: 'Forbidden' })
    }
};
