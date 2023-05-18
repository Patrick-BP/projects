const multer = require('multer');

var diskstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/movies');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const storage = multer({ storage:diskstorage}).single('movie');

module.exports = storage;

