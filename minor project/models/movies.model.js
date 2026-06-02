const db = require("../db/mysql");

async function getAllModelMovie() {
  try {
    const [data, fields] = await db.query(`SELECT * FROM movies`);
    console.log(data);
    console.log(data)
    return data;
    return fields;
  } catch (err) {
    return false;
  }
}

async function getByIdModelMovie(id){
    try {
        const [data, fields] = await db.query(`SELECT * FROM movies WHERE MovieId = '${id}'`);
        return data;
    } catch(err) {
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

async function insertMovieModel(formData){
  try {
    const [data, fields] = await db.query(`INSERT INTO movies (MovieID, MovieName, MovieImage) VALUES (NULL, '${formData.MovieName}', '${formData.MovieImage}');`);
    return data;
  } catch(err) {
    return false;
  }
}

async function updateMovieModel(id, formData){
  try {
    const [data, fields] = await db.query(`UPDATE movies SET MovieName = '${formData.MovieName}', MovieImage = '${formData.MovieImage}' WHERE MovieID = '${id}';`);
    return data;
  } catch(err) {
    return false;
  }
}

async function deleteMovieModel(id){
  try {
    const [data, fields] = await db.query(`DELETE FROM movies WHERE MovieID = '${id}';`);
    return data;
  } catch(err) {
    return false;
  }
}
module.exports = { getAllModelMovie, getByIdModelMovie, insertMovieModel, updateMovieModel, deleteMovieModel, getByUsername };
