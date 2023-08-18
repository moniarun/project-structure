
//REQUEST/RESPONSE HANDLING

//  getting service file to require the database
const db=require('./service')

//async func fr regisstration
const registration= async(req,res)=>

// res to snd register successfully
{
    const register= await db.saveuser(req.body)
    if(register==true)
    {
        res.send('register successfully')
    }
    else
    {
        res.send('emailid is already exist')
    }
}
const login= async(req,res)=>
{
    const logindetail= await db.login(req.body)
    if(logindetail.length==0)
    {
        res.send('emailid not found')
    }
    else if(req.body.password==logindetail[0].password)
    {
        res.send('login successfully')
    }
    else
    {
        res.send('invalid login details')
    }
}  


//async func for getdata
 const fetchdata= async (req,res)=>

 //response to send getdata
 {
    const getuser= await db.fetchdata()
    res.send(getuser)
 }

 //async func for get details
const fetchdetails= async(req,res)=>

{
    const getdetails= await db.fetchdetails(req.body.Emailid)
    res.send(getdetails)
}

//aync func for updatedetails
const updatedata= async(req,res)=>

//res to snd the mail & password update
 {
     const mailupdate = await db.updatedata(req.body.Emailid,req.body.password)
     res.send(mailupdate)
 }

 //asysnc func fr update all details
 const updateall= async(req,res)=>

 //res to snd update all 
 {
    const updateall= await db.updatealldetails(req.body)
    res.send(updateall)
 }
 const nameupdate= async(req,res)=>
 {
    const display=await db.updateall(req.body)
    res.send(display)
 }

 // to exports all doc db
module.exports=
{
    registration,
    login,
    fetchdata,
    fetchdetails,
    updatedata,
    updateall,
    nameupdate

    


}

