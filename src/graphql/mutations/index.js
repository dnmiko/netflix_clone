import UserMutations from './users';
import GenreMutations from './genres';
import MovieMutations from './movies';
import RatingMutations from './ratings';

export default {
    ...UserMutations,
    ...MovieMutations,
    ...GenreMutations,
    ...RatingMutations
}