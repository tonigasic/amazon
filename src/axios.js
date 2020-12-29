import axios from "axios";

const instance = axios.create({
    //baseURL: 'http://localhost:5001/e-comm-6717b/us-central1/api' //the local api (cloud function) url
    baseURL: 'https://us-central1-e-comm-6717b.cloudfunctions.net/api' //the api (cloud function) url
})

export default instance;