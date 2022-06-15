import { useEffect, useState } from "react";

const useAllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("allServices.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};

export default useAllServices;
