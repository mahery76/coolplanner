import axios from "axios";

export const getData = async (url: string) => {
    try {
      const data = await axios.get(url);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
