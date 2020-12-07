import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-yamini-ecom-clone.cloudfunctions.net/api"
  //localhost - cd functions-> firebase emulators:start
  //"http://localhost:6001/yamini-ecom-clone/us-central1/api" // THE API (cloud function) URL
});

export default instance;
