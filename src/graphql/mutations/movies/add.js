import {
    GraphQLNonNull
} from 'graphql';
import Movie from '../../../models/movies';
import { MovieInputType, MovieType } from '../../types/movies';

export default {
    type: MovieType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root, params) {
        const movie = new Movie(params.data);
        const newMovie = movie.save();

        if (!newMovie) throw new Error("Error al agregar a un nuevo rating");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newMovie;
    }
}