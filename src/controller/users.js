const UsersModel = require('../models/tb_club')

const getAllClub = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllClub();
    res.json({
        message: 'GET all date club success',
        data: data
    })

           
    } catch (error) {
        res.status(500).json({
            message:'server error',
            serveMessage: error,
        })
    }
    
}

const getClubById = async (req, res) => {
   const { idClub } = req.params;
   try {
    const [result] = await UsersModel.getClubById(idClub)

       return res.json({ 
        data: result 
       })
   }
    catch (error) {
        res.status(500).json({
            message:'server error',
            serveMessage: error,
        })
   }
       
}



const createNewClub = async (req, res) => {
    
    const {body} = req;

    if(!body.nama_club || !body.alamat_club ||!body.nama_pelatih){
        return res.status(400).json({
            message:'Anda mengirimkan data yang salah',
            data:null
        })
    }
    try {
        const result = await UsersModel.createNewClub(body);
        res.status(201).json({
            messege: 'CREATE new date club succes',
            data: {
                ...body,
                id: result[0].insertId
            }
        })
    
    } catch (error) {
        
        res.status(500).json({
            message:'server error',
            serveMessage: error,
        })
    }
   
}
const updateClub = async(req, res) =>{
    const  {idClub} = req.params;
    const {body} =req;
    try {
        await UsersModel.updateClub(body, idClub);
        res.json({
            message:'Update Date Club Success',
            data: {
                id: idClub,
                ... body
            },
        })
    } catch (error) {
        res.status(500).json({
            message:'server error',
            serveMessage: error,
        })
    }
    
}

const deleteClub = async (req, res) => {
     const {idClub}=req.params;
     try {
        await UsersModel.deleteClub(idClub);
        res.json({
            message:'Delete  Date Club Success',
            data : null
        })
     } catch (error) {
        res.status(500).json({
            message:'server error',
            serveMessage: error,
        })
     }
    
}
module.exports = {
    getAllClub,
    getClubById,
    createNewClub,
    updateClub,
    deleteClub,
}