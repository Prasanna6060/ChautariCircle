import jwt from 'jsonwebtoken';

export const protectRoute = (req,res, next) => {
    const cookie = req.header('cookie')
    const token = cookie.split('=')[1];

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    

    const secretKey = process.env.JWT_SECRET

    const decoded = jwt.verify(token, secretKey)
    if(!decoded) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    req.user = decoded.id
    next();
}

