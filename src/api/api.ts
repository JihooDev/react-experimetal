import axios from "axios";

export const getTeamData = axios.get('http://127.0.0.1:5173').then(res => res.data)