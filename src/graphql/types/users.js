import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLObjectType,
    GraphQLBoolean,
    GraphQLNonNull
} from 'graphql';

export const UserType = new GraphQLObjectType({
    name: "ListUsers",
    description: "Lista los usuarios de la base de datos del clone de Netflix",
    fields: () => ({
        _id: {
            type: GraphQLNonNull(GraphQLID)
        },
        name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        photo: {
            type: GraphQLString
        },
        is_admin: {
            type: GraphQLBoolean
        },
        created_at: {
            type: GraphQLString
        },
        is_active: {
            type: GraphQLBoolean
        },
        client_id: {
            type: GraphQLString
        }
    })
});

//Estos son los datos que puede cambiar el usuario sin necesidad de ser admin.
export const UserInputType = new GraphQLInputObjectType({
    name: "AddUsers",
    description: "Agrega nuevos usuarios a la base de datos del clone de Netflix",
    fields: () => ({
        name: {
            type: GraphQLString
        },
        last_name: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        photo: {
            type: GraphQLString
        }
    })
});

//TODO: Agregar un tipo de GraphQL para el admin.