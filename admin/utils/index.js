import toastr from 'toastr';

const isAuth = () => {
  if (!localStorage.getItem('token') || !localStorage.getItem('email')) {
    return false;
  }
  return true;
};

const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  toastr.success('Successfully Logout', 'MERNjs');
  return true;
};

export { isAuth, signOut };
