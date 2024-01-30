//Configurações de upload de arquivo com o multer
const multer = require('multer'); //OK
const path = require('path');

module.exports = {
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb){
            //Call Back
            cb(null, file.originalname);
        }
    })
};