'use strict';

import AWS from 'aws-sdk';
import Promise from 'bluebird';
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import crypto from 'crypto';

const s3 = new aws.S3();

const AWS_S3_FILES_BUCKET = process.env.AWS_S3_FILES_BUCKET;
const AWS_S3_FILES_KEY_PREFIX = process.env.AWS_S3_FILES_KEY_PREFIX;

const upload = multer({
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

export function uploadToS3() {
  return upload.single('photo.jpg')
}
/**
 * Generate an array of image style objects based on the S3 key (original url)
 * @param  {String} s3Key The original S3 Key
 * @return {Object}        Object of image styles
 */
export function stylesForImage(s3Key) {
  const baseDirectory = 'original';
  const styles = ['large', 'large_square', 'medium', 'medium_square', 'thumb', 'thumb_square'];

  let imageStyles = {};

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
export function validateExistence(s3Key) {
  return new Promise((resolve, reject) => {
    if (!s3Key) {
      reject(new Error('S3 key is required to validate existence of the file.'));
    }

    let params = {
      Bucket: process.env.AWS_S3_FILES_BUCKET,
      Key: s3Key,
    };
    let s3 = new AWS.S3();
    s3.headObject(params, (err, response) => {
      if (err) {
        let errMessage = new Error(`Could not find S3 file ${s3Key}. ` +
                                   `Error '${err.code}' with status '${err.statusCode}'.`);
        console.error(errMessage);
        reject(errMessage);
      }

      console.log(`Confirmed existence for ${s3Key}.`);
      resolve(response);
    });
  });
}

/**
 * Returns a promise of a S3 key file
 * @param  {String} s3Key S3 key of CSV
 * @return {Promise<Response|Error>} Returns the success response of the s3.headObject API call or error
 */
export function getFile(s3Key) {
  return new Promise((resolve, reject) => {
    if (!s3Key) {
      reject(new Error('S3 key is required to get the file.'));
    }

    let params = {
      Bucket: process.env.AWS_S3_FILES_BUCKET,
      Key: s3Key,
    };
    let s3 = new AWS.S3();
    s3.getObject(params, (err, response) => {
      if (err) {
        let errMessage = new Error(`Could not find S3 file ${s3Key}. ` +
                                   `Error '${err.code}' with status '${err.statusCode}'.`);
        console.error(errMessage);
        reject(errMessage);
      }

      console.log(`Found file for ${s3Key}.`);
      resolve(response);
    });
  });
}
