"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenreInputType = exports.GenreType = undefined;

var _graphql = require("graphql");

var GenreType = exports.GenreType = new _graphql.GraphQLObjectType({
    name: "ListGenres",
    description: "Lista de los géneros en la base de datos de clone de Netflix",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var GenreInputType = exports.GenreInputType = new _graphql.GraphQLInputObjectType({
    name: "AddGenres",
    description: "Agrega géneros en la base de datos de clone de Netflix",
    fields: function fields() {
        return {
            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            }
        };
    }
});