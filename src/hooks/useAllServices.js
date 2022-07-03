import { useEffect, useState } from "react";

const useAllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};

export default useAllServices;
