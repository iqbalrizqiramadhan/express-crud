const dbPool = require('../config/database');


const getAllClub = () =>{
    const SQLQuery ='SELECT * FROM tb_club';
       
          return dbPool.execute(SQLQuery);
}
const  getClubById =(id_club) =>{
    const SQLQuery = `SELECT * FROM tb_club WHERE id_club=${id_club}`;

    return dbPool.execute(SQLQuery);
}
const createNewClub =(body)=>{
    const SQLQuery = `  INSERT  INTO tb_club (nama_club, alamat_club, nama_pelatih) 
                        VALUES ('${body.nama_club}','${body.alamat_club}','${body.nama_pelatih}')`;

          return dbPool.execute(SQLQuery);
}
const updateClub= (body, id_club)=> {
    const SQLQuery = `UPDATE tb_club
                      SET nama_club ='${body.nama_club}', alamat_club='${body.alamat_club}', nama_pelatih='${body.nama_pelatih}'
                      WHERE  id_club = ${id_club}`;

                      return dbPool.execute(SQLQuery);
                    }
const deleteClub= (id_club) =>{
    const SQLQuery = `DELETE FROM tb_club  WHERE  id_club = ${id_club}`;

    return dbPool.execute(SQLQuery);
}


module.exports = {
getAllClub,
 createNewClub ,
 getClubById,
 updateClub,
 deleteClub,

}