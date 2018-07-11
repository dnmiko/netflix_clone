import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import User from '../../../models/users';
import { UserInputType, UserType } from '../../types/users';

export default {
    type: UserType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolver(root, params) {
        const deletedUser = User.findByIdAndRemove(params.id).exec();

        if (!deletedUser) throw new Error("Error al borrar al usuario");

        return deletedUser;
    }
}