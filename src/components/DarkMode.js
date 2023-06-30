// import React, { useEffect } from "react";
// import { ReactComponent as Sun } from '../assets/images/Sun.svg'
// import { ReactComponent as Moon } from '../assets/images/Moon.svg'
// import './DarkMode.css'
// import { light } from "@mui/material/styles/createPalette";
// import { dark } from "@mui/material/styles/createPalette";

// const DarkMode = () => {
//     useEffect(() => {
//         const selectedTheme = localStorage.getItem("selectedTheme");
//         if (selectedTheme === "dark") {
//           setDarkMode();
//         }
//       }, []);

//     const setDarkMode = () => {
//         document.querySelector("body").setAttribute('data-theme', dark)
//         localStorage.setItem("selectedTheme", "dark");
//     }

//     const setLightMode = () => {
//         document.querySelector("body").setAttribute('data-theme', light)
//         localStorage.setItem("selectedTheme", "light");
//     }

    

//     const toogleTheme = (e) => {
//         if (e.target.checked) setDarkMode();
//         else setLightMode()
//     }

//     return (
//         <div className='dark_mode'>
//             <input
//                 className='dark_mode_input'
//                 type='checkbox'
//                 id='darkmode-toggle'
//                 onChange={toogleTheme}
//             />
//             <label className='dark_mode_label' for='darkmode-toggle'>
//                 <Sun />
//                 <Moon />
//             </label>
//         </div>
//     );
// };

// export default DarkMode;
