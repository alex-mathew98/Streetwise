import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWRkOTU0OGEzMmVlZGY2ZDUyNzY2MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjk3Nzc4NSwiZXhwIjoxNjQzMjM2OTg1fQ.AwjNdglyX-uGoKyrOojQXxKuPCN7l-z6UDfPFmEX1m0";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})