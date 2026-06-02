// const jwt = require('jsonwebtoken');
const { getAllModelMovie, getByIdModelMovie, insertMovieModel, updateMovieModel, deleteMovieModel, getByUsername } = require("../models/movies.model");
async function getAllMovies() {
  const data = await getAllModelMovie();
  if (data) {
    return {
      error: false,
      statusCode: 200,
      data,
      message: "Movies fetched success",
    };
  } else {
    return {
      error: true,
      statusCode: 404,
      message: "Some error occured while fetching the data",
    };
  }
}

async function getByIdMovies(id) {
  const data = await getByIdModelMovie(id);
  if (data) {
    return {
      error: false,
      statusCode: 200,
      data,
      message: "Selected Movie fetched Successfully",
    };
  } else {
    return {
      error: true,
      statusCode: 404,
      message: "Some error occured while fetching movie",
    };
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


async function insertMovie(formData){
  const data = await insertMovieModel(formData);
  if (data) {
    return {
      error: false,
      statusCode: 200,
      data,
      message: "Movie Inserted Success",
    };
  } else {
    return {
      error: true,
      statusCode: 404,
      message: "Some error occured while inserting movie",
    };
  }
}

async function updateMovie(id, formData){
  const data = await updateMovieModel(id, formData);
  if (data) {
    return {
      error: false,
      statusCode: 200,
      data,
      message: "Movie Update Success",
    };
  } else {
    return {
      error: true,
      statusCode: 404,
      message: "Some error occured while updating movie",
    };
  }
}

async function deleteMovie(id){
  const data = await deleteMovieModel(id);
  if (data) {
    return {
      error: false,
      statusCode: 200,
      data,
      message: "Movie delete Success",
    };
  } else {
    return {
      error: true,
      statusCode: 404,
      message: "Some error occured while deleting movie",
    };
  }
}

module.exports = { getAllMovies, getByIdMovies, insertMovie, updateMovie, deleteMovie, checkLogin };
