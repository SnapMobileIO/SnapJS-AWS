'use strict';

var _express = require('express');

var _aws = require('./aws.controller');

var controller = _interopRequireWildcard(_aws);

var _aws2 = require('./aws.helper');

var awsHelper = _interopRequireWildcard(_aws2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

router.post('/uploadToAws', awsHelper.uploadToS3(), controller.uploadToAws);

module.exports.router = router;
module.exports.awsHelper = require('./aws.helper');