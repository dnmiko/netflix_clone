import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';
import Movie from '../../../models/movies';
import { MovieInputType, MovieType } from '../../types/movies';

export default {
    type: MovieType,
    args: {
        id: {
            name: "ID",
            type: new GraphQLNonNull(GraphQLID)
        },
        data: {
            type: new GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root, params) {
        return Movie.findByIdAndUpdate(params.id, { $set: {...params.data } }).then((movie) => {
            return movie;
        }).catch((err) => {
            throw new Error("Error al actualizar a un usuario");
        })
    }
}