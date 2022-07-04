// import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// import { FaCheck, FaTimes } from "react-icons/fa";
// import style from "./ServiceDetail.module.css";

// const ServiceDetail = (props) => {
//   //   const { _id } = useParams();
//   //   const [pricing, setPricing] = useState([]);
//   //   const { service, serviceName } = pricing;
//   //   useEffect(() => {
//   //     const url = `http://localhost:5000/pricing/${_id}`;
//   //     fetch(url)
//   //       .then((res) => res.json())
//   //       .then((data) => setPricing(data));
//   //   }, [_id]);

//   //   const standardService = serviceName?.slice(0, 2);
//   //   const extendedService = serviceName?.slice(0, 3);

//   const { serviceName } = props?.serviceName;
//   const { service } = props?.service;
//   console.log(serviceName);

//   return (
//     <div>
//       <div className={style.service__container}>
//         <div className={style.service}>
//           <span>
//             <FaCheck />
//           </span>
//           <h5>{serviceName[0]} </h5>
//         </div>
//         <div className={style.service}>
//           <span>
//             <FaCheck />
//           </span>
//           <h5>{serviceName[1]} </h5>
//         </div>
//         <div className={style.service}>
//           <span style={{ color: "red" }}>
//             {service === "Standard" ? (
//               <FaTimes style={{ color: "red" }} />
//             ) : (
//               <FaCheck style={{ color: "green" }} />
//             )}
//           </span>
//           <h5>{serviceName[2]} </h5>
//         </div>
//         <div className={style.service}>
//           <span>
//             {service === "Premium" ? (
//               <FaCheck />
//             ) : (
//               <FaTimes style={{ color: "red" }} />
//             )}
//           </span>
//           <h5>{serviceName[3]} </h5>
//         </div>
//         <p style={{ borderBottom: "1px solid rgb(182, 174, 174)" }}></p>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;
