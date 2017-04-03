'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _app = require('../../../dist/server/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

var s3 = new _awsSdk2.default.S3();

describe('AWS Component - Integration', function () {
  /**
   * This test is long and nasty, but matches what happens with AWS image upload
   * 1. Retrieves S3 key from our server
   * 2. Uploads image to bucket (where AWS Lamnda resizes)
   * 3. Checks that the new image sizes exist
   */
  it('should upload file to AWS S3', function (done) {});
});