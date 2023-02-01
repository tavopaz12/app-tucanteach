import { useEffect, useState } from "react";

export const getUsers = (API) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers(API);
  }, [API]);

  const getUsers = async (API) => {
    setLoading(true);
    try {
      const res = await fetch(API);

      if (!res.ok) {
        return setData(`ERROR: ${res.status}, Error durante la petición`);
      }

      const data = await res.json();
      setData([...data]);
    } catch (err) {
      return setData(`Error en el servidor`);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading };
};
