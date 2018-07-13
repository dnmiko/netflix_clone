'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _users3 = require('../../types/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _users3.UserType,
    resolve: function resolve(root, params, context) {
        return context.user;
    }
};