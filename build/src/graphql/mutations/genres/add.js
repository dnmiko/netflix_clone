'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _genres = require('../../../models/genres');

var _genres2 = _interopRequireDefault(_genres);

var _genres3 = require('../../types/genres');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _genres3.GenreType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new _graphql.GraphQLNonNull(_genres3.GenreInputType)
        }
    },
    resolve: function resolve(root, params) {
        var genre = new _genres2.default(params.data);
        var newGenre = genre.save();

        if (!newGenre) throw new Error("Error al agregar a un nuevo rating");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newGenre;
    }
};