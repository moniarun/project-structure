
//DATABASE STORE HANDLING


//requiring mongoose
const mongoose= require('mongoose')

//validating the userschema
const userschema= new mongoose.Schema(
    {
        
        "customername":String,
        "Address":String,
        "Mobilenumber":Number,
        "Emailid":String,
        "password":String
    }

)

//collect the data to savedetails :user= collectionn name
const collect= mongoose.model('user',userschema)
//async func fr savin data registration
const saveuser= async(data)=>
{
    const check= await collect.aggregate([{$match: {Emailid:data.Emailid}}])
if(check.length==0)
{
    const newdata= new collect(data)
    const save= await newdata.save()
    return true
}
else
{
    return false
}
}
//login
const login= async(data)=>
{
    const logindetail= await collect.aggregate([{$match: {Emailid:data.Emailid}}])
    return logindetail
}



//get details to find the details
 const fetchdata= async()=>
 {
    const getdata= await collect.find()
    return getdata 
 }


 //async func to fetching details by email
 const fetchdetails= async(data)=>
 {
     const getdetail= await collection.findOne({Emailid:data.Emailid})
    return getdetail
 }

 //async func to update password by email
 const updatedata= async(data)=>
 {
    const update= await collect.updateOne({Emailid:data.Emailid},{password:data.password})
    return update
 }

 // async func for update all details by name
 const updateall= async(data)=>
 {
    const updatebyname= await collect.updateMany({customername:data.customername},
    {$set:
    {
        
        Address:data.Address,
        password:data.password
    }}
    )
    return updatebyname
    
 }
 // name update
 const nameupdate= async(data)=>
 {
    const update=await collect.findOneAndUpdate({customername:data.customername},
        {$set:
        {
            Emailid:data.Emailid,
            mobilenumber:data.mobilenumber,
            address:data.address,
            password:data.password
        }})
        return nameupdate
 }
 //strict entry
 /* const savenewuser= async(data)=>
 {
    const exist= await collect.({$match:{email:data.email},{mobilenumber:data.mobilenumber}})
    if (exist)
    {
        console.log('already exist')
    }
    else
    {
        const newuser= new collec(data)
        const save= await newuser.save()
        return save
    }

 }
 */
module.exports = 
{
    saveuser,
    login,
    fetchdata,
    fetchdetails,
    updatedata,
    updateall,
    nameupdate

}











