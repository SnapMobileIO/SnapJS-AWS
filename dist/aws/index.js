'use strict';

var _express = require('express');

var _aws = require('./aws.controller');

var controller = _interopRequireWildcard(_aws);

var _aws2 = require('./aws.helper');

var awsHelper = _interopRequireWildcard(_aws2);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _multerS = require('multer-s3');

var _multerS2 = _interopRequireDefault(_multerS);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();
var s3 = new _awsSdk2.default.S3();

var AWS_S3_FILES_BUCKET = process.env.AWS_S3_FILES_BUCKET;
var AWS_S3_FILES_KEY_PREFIX = process.env.AWS_S3_FILES_KEY_PREFIX;

var upload = (0, _multer2.default)({
  storage: (0, _multerS2.default)({
    s3: s3,
    bucket: AWS_S3_FILES_BUCKET,
    contentType: function contentType(req, file, cb) {
      cb(null, file.mimetype != '' ? file.mimetype : 'application/octet-stream');
    },

    acl: 'public-read',
    key: function key(req, file, cb) {
      // Clean the file name of special characters, extra spaces, etc.
      var fileName = file.originalname.replace(/[^a-zA-Z0-9. ]/g, '').replace(/\s+/g, ' ').replace(/[ ]/g, '-');

      // Create random string to ensure unique filenames
      var randomBytes = _crypto2.default.randomBytes(32).toString('hex');

      // *
      //  * Create aws file key by combining random string and file name
      //  * e.g., 73557ec94ea744c5c24bdb03ee114a1ef83ab2dd9bfb20f38999faea14564d19/DarthVader.jpg
      var fileKey = AWS_S3_FILES_KEY_PREFIX + '/' + randomBytes + '/' + fileName;

      cb(null, fileKey);
    }
  })
});

router.post('/uploadToAws', awsHelper.uploadToS3(), controller.uploadToAws);

module.exports.router = router;
module.exports.awsHelper = require('./aws.helper');