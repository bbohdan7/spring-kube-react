import axios from "axios";

let http = axios.create({
    baseURL: "http://192.168.0.195:8080/",
    headers: {
        "Content-Type": "application/json"
    }
})

export default http