'use strict';

import { Router } from 'express';
import * as controller from './aws.controller';
import multer from 'multer';

const router = new Router();
const upload = multer({ dest: 'uploads/' });

router.post('/uploadToAws', upload.single('file'), controller.uploadToAws);

module.exports.router = router;
module.exports.awsHelper = require('./aws.helper');
