import {
    GraphQLNonNull
} from 'graphql';
import Genre from '../../../models/genres';
import { GenreInputType, GenreType } from '../../types/genres';

export default {
    type: GenreType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root, params) {
        const genre = new Genre(params.data);
        const newGenre = genre.save();

        if (!newGenre) throw new Error("Error al agregar a un nuevo rating");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newGenre;
    }
}