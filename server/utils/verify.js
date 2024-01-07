import jwt from 'jsonwebtoken';

export const verifyToken = async(req, res, next) => {
    const token = await req.cookies.access_token;

    if(!token) return res.status(403).json({ message: 'Unauthorized'});

    jwt.verify(token, process.env.JWT, (error, data) => {
        if (error) return res.status(403).json({ message: 'Invalid Token' });

        // Saving the currently logged in user in req.user object
        req.user = data;
        next();
    })
}

// Validate User
export const verifyUser = async(req, res, next) => {
    verifyToken(req, res, () => {
        if (req.params.userId === req.user.id) {
            next();
        } else {
            res.status(403).json({ message: 'Unauthorized Action' });
        }
    })
}

// Validate Admin
export const verifyAdmin = async(req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.admin) {
            next();
        } else {
            res.status(403).json({ message: 'Unauthorized Action' });
        }
    })
}

// Validate Admin for profile actions
export const verifyAdminProfile = async(req, res, next) => {
    verifyAdmin(req, res, () => {
        if(req.params.adminId === req.user.id) {
            next();
        } else {
            res.status(500).json({ message: 'Unauthorized Action' })
        }
    })
}

// Validate either user or admin
export const verifyUserAndAdmin = async(req, res, next) => {
    verifyToken(req, res, () => {
        if (req.params.userId === req.user.id || req.params.admin) {
            next();
        } else {
            res.status(403).json({ message: 'Unauthorized Action' });
        }
    })
}