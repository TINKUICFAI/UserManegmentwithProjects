const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const subCategorySchema = new Schema({
  name:{type: String},
  description:{ type: String,default:null },
  image:{ type: String,default:null },
  category:{type:Schema.Types.ObjectId, ref: 'Category'},
  status : {
    type : String,
    enum:["0","1"],
    default: 1
  },
  time : {
    type : Date,
    default: Date.now
  }
});


var SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports=SubCategory;
