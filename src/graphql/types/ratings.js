import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInt
} from 'graphql';

export const RatingType = new GraphQLObjectType({
    name: "ListRatings",
    description: "Lista de las clasificaciones en la base de datos de clone de Netflix",
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
        age: {
            type: GraphQInt
        },
        is_active: {
            type: GraphQLBoolean
        }
    })
});

export const RatingInputType = new GraphQLInputObjectType({
    name: "AddRatings",
    description: "Agrega clasificaciones en la base de datos de clone de Netflix",
    fields: () => ({
        name: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString,
        },
        age: {
            type: GraphQLInt
        }
    })
});