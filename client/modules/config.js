import 'bootstrap';
import 'select2';

import toastr from 'toastr';
toastr.options.positionClass = 'toast-bottom-right';

import axios from 'axios';
axios.defaults.baseURL = process.env.API_URL;
