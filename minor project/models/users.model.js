const db = require("../db/mysql");

async function getAll(){
    try{
    const [data, fields] = await db.query("SELECT * FROM users");
    return data;
    } catch(err){
        return false;
    }
}

async function getById(id){
    try{
    const [data, fields] = await db.query(`SELECT * FROM users where UserId = '${id}'`);
    return data[0];
    } catch(err){
        return false;
    }
}

async function getByUsername(un){
    try{
    const [data, fields] = await db.query(`SELECT * FROM users where UserName = '${un}'`);
    return data[0];
    } catch(err){
        return false;
    }
}

async function insertModel(formData){
    try{
    const [data, fields] = await db.query(`INSERT INTO users (UserID, UserName, Password) VALUES (NULL, '${formData.UserName}', '${formData.Password}');`);
    return data;
    } catch(err){
        return false;
    }
}

async function updateModel(id, formData){
    try{
    const [data, fields] = await db.query(`UPDATE users SET UserName = '${formData.UserName}', Password = '${formData.Password}' WHERE users.UserID = '${id}';`);
    return data;
    } catch(err){
        // console.error(err);
        return false;
    }
}

async function deleteModel(id){
    try{
    const [data, fields] = await db.query(`DELETE FROM users WHERE UserID = '${id}'`);
    return data;
    } catch(err){
        return false;
    }
}

module.exports = {getAll, getById, insertModel, updateModel, deleteModel, getByUsername}