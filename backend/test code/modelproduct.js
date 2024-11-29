import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },

  description: {
    type: String,
    required: [true,"Please Enter Product Description"]
  },

  price: { type: Number, default: 0.0 },

  ratings: {
    type: String,
    default: 0,
  },

  category: {
    type: String,
    required: true,
    enum: {
      values: [
        "Electronics",
        "Mobile Phones",
        "Laptop",
        "Desktop",
        "Workstation",
        "Bags",
        "Printers",
        "Scanners",
        "Copier",
        "Accessories",
      ],
      message: "please select category",
    },
  },

  stock: {
    type: Number,
    required: true,
    maxLength:[true,"Product Stock cannot exceed 20"]
  },

  imageUrl: [
    {
      image: {
        type: String,
        required: true,
      },
    },
  ],
   numOfReviews:{
    type:Number,
    default:0 

   },


   reviews:[
    {
      name:{
        type:String,
        required:true
      },

      rating:{
        type:String,
        required:true

      },
      comment:{
        type:String,
        required:true
      }

      }
    

   ],
  

   

  seller: {
    type: String,
    required: [true, "please enter product seller"]
  },

  createdAt:{
       type:Date,
       default:Date.now()
  }

});

const Product = mongoose.model("Product", productSchema);

export default Product;
