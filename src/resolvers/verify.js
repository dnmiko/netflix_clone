import User from '../models/users';
import jwt from 'jsonwebtoken';

//Deberían ser variables de entorno.
const expiresIn = "3d";
const secret = "samplejwtnetflix";
const tokenPrefix = "JWT";

export const verifyToken = (token) => {

    try {
        const [prefix, recivedToken] = token.split(' ');
        let user = null;

        if (!recivedToken) {
            throw new Error('No token provided');
        }

        if (prefix != tokenPrefix) {
            throw new Error('Invalid header format');
        }

        jwt.verify(recivedToken, secret, (err, payload) => {
            if (err) {
                throw new Error('Invalid token');
            } else {
                user = User.findById(payload.id).exec()
            }
        });

        if (!user) throw new Error('User does not exist');

        return user;
    } catch (err) {
        throw Error("Error inesperado");
    }
}