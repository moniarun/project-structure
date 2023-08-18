const mongoose= require('mongoose')
const userschema= new mongoose.Schema(
    {
        "name": String,
        "age": Number,
        "gender": String,
        "city": String  
}
)

const collect= mongoose.model('fileupload',userschema)
    
const savedata= async(info)=>{ 
    const data= new collect(info)
    const saveuser= await data.save()
    return saveuser
}

module.exports=
{
    savedata
}

