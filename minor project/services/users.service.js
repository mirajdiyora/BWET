const {
  getAll,
  getById,
  insertModel,
  updateModel,
  deleteModel,
  getByUsername,
} = require("../models/users.model");
const jwt = require('jsonwebtoken')


async function getAllUser() {
  const data = await getAll();
  if (data) {
    return {
      error: false,
      data,
      message: "User fetched successfuly",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the user",
    };
  }
}



async function getAllUserById(id) {
  const data = await getById(id);
  if (data) {
    return {
      error: false,
      data,
      message: "User fetched successfuly",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while fetching the user",
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

async function insertUser(formData) {
  const data = await insertModel(formData);
  if (data) {
    return {
      error: false,
      data,
      message: "User Inserted successfuly",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while inserting the user",
    };
  }
}

async function updateUser(id, formData) {
  const data = await updateModel(id, formData);
  if (data) {
    return {
      error: false,
      data,
      message: "User Updated successfuly",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while Updating the user",
    };
  }
}

async function deleteUser(id) {
  const data = await deleteModel(id);
  if (data) {
    return {
      error: false,
      data,
      message: "User Deleted successfuly",
    };
  } else {
    return {
      error: true,
      message: "Some error occured while deleting the user",
    };
  }
}

module.exports = {
  getAllUser,
  getAllUserById,
  insertUser,
  updateUser,
  deleteUser,
  checkLogin,
};
