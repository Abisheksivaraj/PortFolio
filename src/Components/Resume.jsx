// import React from "react";
// import { motion } from "framer-motion";
// import { FaUserGraduate, FaRegChartBar } from "react-icons/fa";
// import { MdWorkHistory } from "react-icons/md";
// import { GiLaptop } from "react-icons/gi";
// import { IoMdColorPalette } from "react-icons/io";
// import { RxDotFilled } from "react-icons/rx";

// const Resume = () => {
//   return (
//     <motion.div
//       className=" "
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div>
//         <h1 className="text-white text-[2rem] text-center font-semibold underline-offset-4">
//           Resume
//         </h1>
//       </div>
//       <motion.div className="mt-16 flex flex-col justify-between md:items-center gap-10 md:gap-[18rem] ">
//         <motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: -500 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             <ul className="flex flex-col items-start justify-evenly md:mt-10 ml-10 w-10  p-1 bg-white rounded-md md:w-16 md:h-[40rem] h-[25rem] md:p-3 md:rounded-md">
//               <li className="text-[#f98d2f] flex items-center ">
//                 <FaUserGraduate className=" md:h-10 h-8 w-8 md:w-10" />
//                 <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12 px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
//                   Education
//                 </span>
//               </li>
//               <li className="text-[#f98d2f] flex items-center">
//                 <MdWorkHistory className="h-8 w-8 md:h-10 md:w-10 " />
//                 <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
//                   Work History
//                 </span>
//               </li>
//               <li className="text-[#f98d2f] flex items-center">
//                 <GiLaptop className="h-8 w-8 md:h-10 md:w-10 " />
//                 <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
//                   Skills
//                 </span>
//               </li>
//               <li className="text-[#f98d2f] flex items-center">
//                 <FaRegChartBar className="h-8 w-8 md:h-10 md:w-10 " />
//                 <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
//                   Projects
//                 </span>
//               </li>
//               <li className="text-[#f98d2f] flex items-center">
//                 <IoMdColorPalette className="h-8 w-8 md:h-10 md:w-10 " />
//                 <span className="text-start text-[white] ml-1 md:ml-2 text-[2rem] h-12  items-center px-2 py-[-1px] w-[15rem] rounded-r-full hover:bg-white hover:duration-700 hover:text-[navy]">
//                   Intrests
//                 </span>
//               </li>
//             </ul>
//           </motion.div>
//         </motion.div>

//         <motion.div>
//           <motion.div
//             className="md:h-[40rem] h-[33rem] w-[18rem] md:w-[50rem] bg-[#021024] shadow-2xl shadow-blue-500/20 ml-[-10px] scroll"
//             initial={{ opacity: 0, y: 0 }}
//             animate={{ opacity: 1, x: 50 }}
//             transition={{ duration: 1, delay: 1 }}
//           >
//             <div className="text-white p-6  items-center mt-5 ">
//               <span className="flex items-center">
//                 <RxDotFilled className="text-[3rem]  hidden md:block" />
//                 <h1 className="text-[#f98d2f] text-2xl font-bold w-full">
//                   Skill Safari
//                 </h1>
//                 <p className="h-14 p-1 rounded-md md:w-28 text-center w-28 font-bold bg-black ">
//                   2023-2024
//                 </p>
//               </span>
//               <span className="text-2xl">Full Stack Developer</span>
//             </div>

//             <div className="text-white p-6  items-center mt-5 ">
//               <span className="flex items-center">
//                 <RxDotFilled className="text-[3rem]  hidden md:block" />
//                 <h1 className="text-[#f98d2f] text-2xl font-bold w-[25rem]">
//                   KPR Institute of Engineering and Technology
//                 </h1>
//                 <p className="h-14 p-1 rounded-md md:w-28 text-center w-28 font-bold bg-black ">
//                   2018-2022
//                 </p>
//               </span>
//               <span className="text-2xl">BE.Mechanical Engineering</span>
//             </div>

//             <div className="text-white p-6  items-center mt-5 ">
//               <span className="flex items-center">
//                 <RxDotFilled className="text-[3rem]  hidden md:block" />
//                 <h1 className="text-[#f98d2f] text-2xl font-bold w-[25rem]">
//                   Sri Aanoor Vidyalaya
//                 </h1>
//                 <p className="h-14 p-1 rounded-md md:w-28 text-center w-28 font-bold bg-black ">
//                   2017-2018
//                 </p>
//               </span>
//               <span className="text-2xl">Higher Secondary</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Resume;
