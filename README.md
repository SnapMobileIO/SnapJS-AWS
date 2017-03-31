# SnapMobile-Aws

# Usage

Include this private module by adding the following under `dependencies` in `package.json`, and run `npm install`.

    "snapjs-aws": "git+ssh://@github.com/SnapMobileIO/SnapJS-AWS.git",

To configure, add the following to `routes.js`:

	import { router as awsRouter, awsHelper as awsHelper } from 'snapjs-aws';
	app.use('/api/aws/', awsRouter);

# Updating

Make any changes in `/src`.

Once changes are completed, run `gulp dist` to process JavaScript files and add to `/dist`.
