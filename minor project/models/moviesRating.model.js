const db = require('../db/mysql')

async function getAllRatingModel(){
    try {
    const [data, fields] = await db.query(`SELECT * FROM movie_rating`);
    return data;
    } catch(err) {
        return false
    }
}

async function getRatingByIdModel(id){
    try {
        const [data, fields] = await db.query(`SELECT * FROM movie_rating WHERE RatingID = '${id}'`);
        return data;
    } catch(err) {
        return false
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

async function insertRatingModel(formData){
    try {
        const [data, fields] = await db.query(`INSERT INTO movies (RatingID, MovieID, UserID, RatingStar,RatingComment ) VALUES (NULL, '${formData.MovieID}', '${formData.UserID}', '${formData.RatingStar}', '${formData.RatingComment}');`);
        return data;
    } catch(err) {
        return false
    }
}

async function updateRatingModel(id, formData){
    try {
        const [data, fields] = await db.query(`SELECT movie_rating SET RatingStar = '${formData.RatingStar}' , RatingComment = '${formData.RatingComment}' WHERE RatingID = '${id}'`);
        return data;
    } catch(err) {
        return false
    }
}

async function deleterRatingModel(id){
    try {
        const [data, fields] = await db.query(`DELETE FROM movie_rating WHERE RatingID = '${id}'`);
        return data;
    } catch(err) {
        return false
    }
}

module.exports = {getAllRatingModel, getRatingByIdModel, insertRatingModel, updateRatingModel, deleterRatingModel, getByUsername }