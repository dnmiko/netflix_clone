'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _ratings = require('../../../models/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _ratings3 = require('../../types/ratings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _ratings3.RatingType,
    args: {
        data: {
            //Significa que tiene que venir con todos los valores del tipo UserInputType.
            type: new _graphql.GraphQLNonNull(_ratings3.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        var rating = new _ratings2.default(params.data);
        var newRating = rating.save();

        if (!newRating) throw new Error("Error al agregar a un nuevo rating");
        //Me regresa el mismo objeto que le mandé de parámetro, pero con el _id que le corresponde.
        return newRating;
    }
};