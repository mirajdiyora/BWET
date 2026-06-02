const { getAllRatingModel, getRatingByIdModel, insertRatingModel, updateRatingModel, deleterRatingModel } = require("../models/moviesRating.model");

async function getAllRating(){
    const data = await getAllRatingModel();
    if(data){
        return {
            error: false,
            statusCode:200,
            data,
            message: "All movie ratings fetched"
        }
    }
    else{
        return {
            error: true,
            statusCode: 404,
            message: "Some error occured while fetching"
        }
    }
}

async function getByIdRating(id){
    const data = await getRatingByIdModel(id);
    if(data){
        return {
            error: "false",
            statusCode: 200,
            data,
            message:"Movie fetched successfully"
        }
    } 
    else{
        return {
            error: true,
            statusCode:404,
            message:"Some error occured while fetching the movie"
        }
    }
}

async function checkLogin(formData) {
  const data = await getByUsername(formData.UserName);

  if (data) {
    if (data.Password === formData.Password) {
      const token = jwt.sign(data, 'sdfjskefbekf.423423knbfsksd.dasa2');
      return {
        error: false,
        data: token,
        message: "User Login successfuly",
      };

      return {
        error: true,
        message: "UserName or Password doesn't match",
      };
    }
  } else {
    return {
      error: true,
      message: "UserName or Password doesn't match",
    };
  }
}

async function insertRating(formData){
    const data = await insertRatingModel(formData);
    if(data){
        return {
            error: "false",
            statusCode: 200,
            data,
            message:"Movie added successfully"
        }
    } 
    else{
        return {
            error: true,
            statusCode:404,
            message:"Some error occured while adding the movie"
        }
    }
}

async function updateRating(id, formData) {
    const data = updateRatingModel(id, formData);
    if(data){
        return {
            error: "false",
            statusCode: 200,
            data,
            message:"Movie update successfully"
        }
    } 
    else{
        return {
            error: true,
            statusCode:404,
            message:"Some error occured while updating the movie"
        }
    }
}

async function deleteRating(id) {
    const data = deleterRatingModel(id);
    if(data){
        return {
            error: "false",
            statusCode: 200,
            data,
            message:"Movie delete successfully"
        }
    } 
    else{
        return {
            error: true,
            statusCode:404,
            message:"Some error occured while deleting the movie"
        }
    }
}
    
module.exports = {getAllRating, getByIdRating, insertRating, updateRating, deleteRating, checkLogin}