import $ from 'jquery';
import toastr from 'toastr';

export const selectUser = (user) => {
  console.log("You clicked on user: ", user);
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};

export const createUser = (user) => {
  console.log("You created a user: ", user);
  let payload = {};
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/users",
    data: user,
    success: function(data) {
      payload = data;
    },
    async: false
  });
  toastr.success(payload.message);
  return {
    type: 'USER_CREATED',
    payload: null
  }
};

export const updateUser = (user, _id) => {
  console.log("You updated a user: ", user);
  let payload = {};
  $.ajax({
    type: "PUT",
    url: "http://localhost:3000/api/users/" + _id,
    data: user,
    success: function(data) {
      payload = data;
    },
    async: false
  });
  toastr.success(payload.message);
  return {
    type: 'USER_UPDATED',
    payload: null
  }
};

export const deleteUser = (_id) => {
  console.log("You deleted a user: ", _id);
  let payload = {};
  $.ajax({
    type: "DELETE",
    url: "http://localhost:3000/api/users/" + _id,
    success: function(data) {
      payload = data;
    },
    async: false
  });
  toastr.success(payload.message);
  return {
    type: 'USER_DELETED',
    payload: null
  }
};
