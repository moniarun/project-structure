const service = require('./service')

const csv = require('csvtojson')

const xlsx = require('xlsx')

const exceluser = async(req,res)=>
{
    try{
        /*if(!req.file)
        {
            res.send({code:404,message:"please upload excel file...!"})
            return console.log('kindly select and upload excel file');
        }*/

        let path = './files/'+req.file.filename
        const details = xlsx.readFile(path)
        const sheetName = details.SheetNames[0];
        const sheet=details.Sheets[sheetName]
        const data = xlsx.utils.sheet_to_json(sheet)


        for(const item of data)
        {
            const servicesave = await service.savedata(item);
        }
        res.send({status:200,success:true,message:"upload successfully"})

    }catch(error)
    {
        res.send({message:error,status:"not uploaded"})
    }
}


//upload csv file in post man and save it in the database
/*const importuser=async(req,res)=>{
    try{
        if((req.file==undefined)||(req.file==null)){
            res.send({code:404,message:"please upload csv file...!"})
            return console.log('kindly select and upload csv file');
        }
        let path="./files/"+req.file.filename
        const details=await csv().fromFile(path)            //csv(),fromFile()-->reads data from csv file
    
        
        for (const item of details){
            const servicesave =await service.savedata(item);
            
        
        }res.send({status:200,success:true ,message:"uploaded succesfully"})
    }catch(error){
        res.send({message:error,status:"not uploaded"})
    
    }    
    }*/
    module.exports = 
    {
    
        exceluser
    }