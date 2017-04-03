'use strict';

var _express = require('express');

var _aws = require('./aws.controller');

var controller = _interopRequireWildcard(_aws);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();
var upload = (0, _multer2.default)({ dest: 'uploads/' });

router.post('/uploadToAws', upload.single('file'), controller.uploadToAws);

module.exports.router = router;
module.exports.awsHelper = require('./aws.helper');