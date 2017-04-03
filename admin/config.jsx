import axios from 'axios';
import toastr from 'toastr';

axios.defaults.baseURL = process.env.API_URL;

toastr.options.positionClass = 'toast-bottom-right';
toastr.options.closeButton = true;
