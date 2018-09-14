'use strict';

import { Router } from 'express';
import * as controller from './aws.controller';
import multer from 'multer';

const router = new Router();
const upload = multer({ dest: 'uploads/' });

router.put('/uploadToAws', upload.single('file'), controller.uploadToAws);
router.get('/s3Signature', controller.s3Signature);

module.exports.router = router;
module.exports.awsHelper = require('./aws.helper');
