'use strict';

export function uploadToAws(req, res, next) {
  if (req.file) {
    let fileObject = {
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size,
      url: req.file.key
    };

    // Send back the location of the file
    res.status(200).json(fileObject);
  } else {
    res.status(200).json({ error: 'File did not upload to AWS' });
  }
}