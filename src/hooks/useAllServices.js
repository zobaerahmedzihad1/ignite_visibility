import { useEffect, useState } from "react";

const useAllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://secure-cliffs-23547.herokuapp.com/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};

export default useAllServices;
