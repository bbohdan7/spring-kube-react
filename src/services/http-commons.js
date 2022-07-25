import axios from "axios";

let http = axios.create({
    baseURL: "http://frontend/api/",
    headers: {
        "Content-Type": "application/json"
    }
})

export default http
