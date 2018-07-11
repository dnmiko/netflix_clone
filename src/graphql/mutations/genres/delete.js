import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Genre from '../../../models/genres';
import { GenreInputType, GenreType } from '../../types/genres';

export default {
    type: GenreType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolver(root, params) {
        const deletedGenre = Genre.findByIdAndRemove(params.id).exec();

        if (!deletedGenre) throw new Error("Error al borrar al usuario");

        return deletedGenre;
    }
}