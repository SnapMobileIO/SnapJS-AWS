'use strict';

import { Router } from 'express';
import * as controller from './aws.controller';
import * as awsHelper from './aws.helper';

const router = new Router();

router.post('/uploadToAws', awsHelper.uploadToS3(), controller.uploadToAws);

module.exports.router = router;
module.exports.awsHelper = require('./aws.helper');
