# SnapMobile-Aws

# WARNING updating this module to 1.1.0+ is dependant on updating your @snapmobile/snapjs-admin to 0.3.12+

# Usage

Include this private module by adding the following under `dependencies` in `package.json`, and run `npm install`.

    "snapjs-aws": "git+ssh://@github.com/SnapMobileIO/SnapJS-AWS.git",

To configure, add the following to `routes.js`:

    import { router as awsRouter, awsHelper as awsHelper } from 'snapjs-aws';
    app.use('/api/aws/', awsRouter);

# Updating

Make any changes in `/src`.

Once changes are completed, run `gulp dist` to process JavaScript files and add to `/dist`.

# large uploads

version 0.3.12 adds the ability to get a signature for a direct browser upload. You need two new variables in your env file
AWS_S3_VIDEO_OVERSIZED_PREFIX this is the prefix where the file will be uploaded to
AWS_REGION this is the region of the aws bucket.
