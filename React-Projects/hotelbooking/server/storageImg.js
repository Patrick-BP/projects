const multer = require('multer');

var diskstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const storage = multer({ storage:diskstorage}).single('image');
module.exports = storage;