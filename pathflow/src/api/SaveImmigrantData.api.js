import axios from "axios";

const SaveImmigrantData = async (immigrantData) => {
  const base = "http://localhost:3000";

  const res = await axios.post(`${base}/immigrants/create`, immigrantData);

  return res.data;
};

export { SaveImmigrantData };
