import {
    GraphQLList
} from 'graphql';
import Genre from '../../../models/genres';
import {
    GenreType
} from '../../types/genres';

const queryAllGenres = {
    type: new GraphQLList(GenreType),
    resolve() {
        const genres = Genre.find().exec();

        if (!genres) throw new Error("Error al traer los géneros de la base de datos");
        return genres;
    }
}

export default queryAllGenres;