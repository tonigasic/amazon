import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-comm-6717b/us-central1/api' //the api (cloud function) url
})

export default instance;