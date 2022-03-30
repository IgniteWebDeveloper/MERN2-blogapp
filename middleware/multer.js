const multer  = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', "public", "uploads"))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = "SCS-" + Date.now() + path.extname(file.originalname);
      cb(null, uniqueSuffix)
    }
  })

  const filefilter = (req, file, cb) => {
    const extname = /png|jpg|jpeg|svg|webp/;
    const mimetype = extname.test(file.mimetype);
    const ext = extname.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && ext) {
      return cb(null, true);
    }
    cb("Only "+ extname+" types are allowed!", false);
  }
  
  module.exports = multer({ 
    storage: storage,
    fileFilter: filefilter
  }).single('photo');