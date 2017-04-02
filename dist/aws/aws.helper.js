'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadToS3 = uploadToS3;
exports.stylesForImage = stylesForImage;
exports.validateExistence = validateExistence;
exports.getFile = getFile;

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _multerS = require('multer-s3');

var _multerS2 = _interopRequireDefault(_multerS);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function uploadToS3() {
  return upload.single('photo.jpg');
}
/**
 * Generate an array of image style objects based on the S3 key (original url)
 * @param  {String} s3Key The original S3 Key
 * @return {Object}        Object of image styles
 */
function stylesForImage(s3Key) {
  var baseDirectory = 'original';
  var styles = ['large', 'large_square', 'medium', 'medium_square', 'thumb', 'thumb_square'];

  var imageStyles = {};

  for (var i = styles.length - 1; i >= 0; i--) {
    imageStyles[styles[i]] = s3Key.replace(baseDirectory, styles[i]);
  }

  return imageStyles;
}

/**
 * Validates existence of S3 key via AWS API `headObject` method
 * @param  {String} s3Key S3 key to validate
 * @return {Promise<Response|Error>} Returns the success response of the s3.headObject API call or error
 */
function validateExistence(s3Key) {
  return new _bluebird2.default(function (resolve, reject) {
    if (!s3Key) {
      reject(new Error('S3 key is required to validate existence of the file.'));
    }

    var params = {
      Bucket: process.env.AWS_S3_FILES_BUCKET,
      Key: s3Key
    };
    var s3 = new _awsSdk2.default.S3();
    s3.headObject(params, function (err, response) {
      if (err) {
        var errMessage = new Error('Could not find S3 file ' + s3Key + '. ' + ('Error \'' + err.code + '\' with status \'' + err.statusCode + '\'.'));
        console.error(errMessage);
        reject(errMessage);
      }

      console.log('Confirmed existence for ' + s3Key + '.');
      resolve(response);
    });
  });
}

/**
 * Returns a promise of a S3 key file
 * @param  {String} s3Key S3 key of CSV
 * @return {Promise<Response|Error>} Returns the success response of the s3.headObject API call or error
 */
function getFile(s3Key) {
  return new _bluebird2.default(function (resolve, reject) {
    if (!s3Key) {
      reject(new Error('S3 key is required to get the file.'));
    }

    var params = {
      Bucket: process.env.AWS_S3_FILES_BUCKET,
      Key: s3Key
    };
    var s3 = new _awsSdk2.default.S3();
    s3.getObject(params, function (err, response) {
      if (err) {
        var errMessage = new Error('Could not find S3 file ' + s3Key + '. ' + ('Error \'' + err.code + '\' with status \'' + err.statusCode + '\'.'));
        console.error(errMessage);
        reject(errMessage);
      }

      console.log('Found file for ' + s3Key + '.');
      resolve(response);
    });
  });
}