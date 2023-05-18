


// const multer = require('multer');

// var diskstorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/posters');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   }
// });

// const storage = multer({ storage:diskstorage}).single('image');



require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer')
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

const s3 = new S3Client({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region:process.env.AWS_REGION
})


const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    bucket:process.env.AWS_BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null,  `posters/${file.originalname}`)
    }
  })
})
const storage = multer(uploadS3).single('image');
module.exports = storage;
