'use strict';

import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import AWS from 'aws-sdk';
import async from 'async';
import server from '../../../dist/server/app';

chai.use(chaiHttp);

const s3 = new AWS.S3();

describe('AWS Component - Integration', function() {

  it('should get a S3 signature object on /api/aws/s3Signature GET', function(done) {
  });

  /**
   * This test is long and nasty, but matches what happens with AWS image upload
   * 1. Retrieves S3 key from our server
   * 2. Uploads image to bucket (where AWS Lamnda resizes)
   * 3. Checks that the new image sizes exist
   */
  it('should upload file to AWS S3', function(done) {
  });

});
