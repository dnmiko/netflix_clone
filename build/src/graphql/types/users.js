"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
    name: "ListUsers",
    description: "Lista los usuarios de la base de datos del clone de Netflix",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            last_name: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            },
            is_admin: {
                type: _graphql.GraphQLBoolean
            },
            created_at: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            client_id: {
                type: _graphql.GraphQLString
            }
        };
    }
});

//Estos son los datos que puede cambiar el usuario sin necesidad de ser usuario.
var UserInputType = exports.UserInputType = new _graphql.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Agrega nuevos usuarios a la base de datos del clone de Netflix",
    fields: function fields() {
        return {
            name: {
                type: _graphql.GraphQLString
            },
            last_name: {
                type: _graphql.GraphQLString
            },
            password: {
                type: _graphql.GraphQLString
            },
            email: {
                type: _graphql.GraphQLString
            },
            photo: {
                type: _graphql.GraphQLString
            }
        };
    }
});

//TODO: Agregar un tipo de GraphQL para el admin.