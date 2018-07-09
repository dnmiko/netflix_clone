import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

export const GenreType = new GraphQLObjectType({
    name: "ListGenres",
    description: "Lista de los géneros en la base de datos de clone de Netflix",
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString,
        },
        is_active: {
            type: GraphQLBoolean
        }
    })
});

export const GenreInputType = new GraphQLInputObjectType({
    name: "AddGenres",
    description: "Agrega géneros en la base de datos de clone de Netflix",
    fields: () => ({
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString,
        }
    })
});