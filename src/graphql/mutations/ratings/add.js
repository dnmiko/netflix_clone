import {
    GraphQLNonNull
} from 'graphql';
import Rating from '../../../models/ratings';
import { RatingInputType, RatingType } from '../../types/ratings';

export default {
    type: RatingType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root, params) {
        const rating = new Rating(params.data);
        const newRating = rating.save();

        if (!newRating) throw new Error("Error al agregar a un nuevo rating");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newRating;
    }
}