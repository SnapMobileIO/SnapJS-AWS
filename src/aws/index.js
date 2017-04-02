'use strict';

import { Router } from 'express';
import * as controller from './aws.controller';
import { awsHelper as awsHelper } from 'snapjs-aws';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import crypto from 'crypto';

const router = new Router();
const s3 = new aws.S3();

const AWS_S3_FILES_BUCKET = process.env.AWS_S3_FILES_BUCKET;
const AWS_S3_FILES_KEY_PREFIX = process.env.AWS_S3_FILES_KEY_PREFIX;

let upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: AWS_S3_FILES_BUCKET,
    contentType: function(req, file, cb) {
      cb(null, file.mimetype != '' ? file.mimetype : 'application/octet-stream');
    },

    acl: 'public-read',
    key: function(req, file, cb) {
      // Clean the file name of special characters, extra spaces, etc.
      let fileName = file.originalname
                              .replace(/[^a-zA-Z0-9. ]/g, '')
                              .replace(/\s+/g, ' ')
                              .replace(/[ ]/g, '-');

      // Create random string to ensure unique filenames
      let randomBytes = crypto.randomBytes(32).toString('hex');

      // *
      //  * Create aws file key by combining random string and file name
      //  * e.g., 73557ec94ea744c5c24bdb03ee114a1ef83ab2dd9bfb20f38999faea14564d19/DarthVader.jpg
      let fileKey = AWS_S3_FILES_KEY_PREFIX + '/' + randomBytes + '/' + fileName;

      cb(null, fileKey);
    }
  })
});

router.post('/uploadToAws', awsHelper.uploadToS3(), controller.uploadToAws);

module.exports.router = router;
module.exports.awsHelper = require('./aws.helper');
