const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const { Schema } = mongoose;

const orderSchema=new Schema({
    item:String,
    price:Number,
})

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
})

const Order=mongoose.model("Order",orderSchema)
const Customer=mongoose.model("Customer",customerSchema)


const addCustomer=async()=>{
    let cust=new Customer({
        name:"irfan khan"
    })
    let order1=await Order.findOne({item:"CAKE"})
    let order2=await Order.findOne({item:"Chip"})
    cust.orders.push(order1)
    cust.orders.push(order2)
    let result=await cust.save()
    console.log(result)
}

addCustomer()

// const addOrders=async()=>{
//     let res=await Order.insertMany([
//         {item:"CAKE",price:400},

//         {item:"Chip",price:300},
//         {item:"noodles",price:200}
//    ])
//     console.log(res)
    
// }

// addOrders()



