import { validationResult } from "express-validator";
export const validator = async(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    }
    next();
}