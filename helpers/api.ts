import axios from "axios";

export const sanityApi = axios.create({
  baseURL: "https://8xzre917.api.sanity.io/v2021-10-21",
  headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` },
});
const defaultApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: { Authorization: `Bearer ${process.env.SANITY_TOKEN}` },
});

export default defaultApi;
