import axios from "axios";
import React, { useEffect, useState } from "react";

const UseCsData = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        "https://public-api.tracker.gg/v2/csgo/standard/profile/steam/nanishunter"
      );
      const data = result.data;
      setData(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, loading, error };
};
export default UseCsData;
