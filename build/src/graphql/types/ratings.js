"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RatingInputType = exports.RatingType = undefined;

var _graphql = require("graphql");

var RatingType = exports.RatingType = new _graphql.GraphQLObjectType({
    name: "ListRatings",
    description: "Lista de las clasificaciones en la base de datos de clone de Netflix",
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
            age: {
                type: _graphql.GraphQLInt
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            }
        };
    }
});

var RatingInputType = exports.RatingInputType = new _graphql.GraphQLInputObjectType({
    name: "AddRatings",
    description: "Agrega clasificaciones en la base de datos de clone de Netflix",
    fields: function fields() {
        return {
            name: {
                type: _graphql.GraphQLString
            },
            description: {
                type: _graphql.GraphQLString
            },
            age: {
                type: _graphql.GraphQLInt
            }
        };
    }
});