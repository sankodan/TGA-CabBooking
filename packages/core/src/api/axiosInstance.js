import axios from 'axios';

// const MockAdapter = require('axios-mock-adapter');

const axiosInstance = axios.create({
  baseURL: '',
  timeout: 60000,
});


const requestHandler = async (request) => {
  const updatedRequest = request;
  return updatedRequest;
};

const responseHandler = response => response;

async function errorHandler(error) {
  const { response = {} } = error;
  const errorResponse = response;
  const { status, data = {} } = errorResponse;
  const { message } = data;
  const originalRequest = error.config;
  // refersh token in case of Unauthorized
  if ((status === 401 || message === 'Unauthorized') && !originalRequest.retryapi) {
    originalRequest.retryapi = true;
    try {
     
    } catch (tokenError) {
    }
  } else if ((status === 401 || message === 'Unauthorized') && originalRequest.retryapi) {
  }
  return Promise.reject(error);
}

axiosInstance.interceptors.request.use(
  request => requestHandler(request),
  error => errorHandler(error),
);

axiosInstance.interceptors.response.use(
  response => responseHandler(response),
  error => errorHandler(error),
);


// const mock = new MockAdapter(axiosInstance, { delayResponse: 1000 });

export default axiosInstance;
