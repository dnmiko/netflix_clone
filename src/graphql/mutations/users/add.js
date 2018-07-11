import {
    GraphQLNonNull
} from 'graphql';
import User from '../../../models/users';
import { UserInputType, UserType } from '../../types/users';

export default {
    type: UserType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new GraphQLNonNull(UserInputType)
        }
    },
    resolve(root, params) {
        const user = new User(params.data);
        const newUser = user.save();

        if (!newUser) throw new Error("Error al agregar a un nuevo usuario");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newUser;
    }
}