// import React, { useState, useEffect } from "react";
// import weatherLogo from "../resources/weather-app.png";

// const Header = ({ city, setCity }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const [enCity, setEnCity] = useState(""); // input state

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
//   const handleSignInOut = () => setIsSignedIn(!isSignedIn);

//   const handleSearch = () => {
//     setCity(enCity); // send data to parent
//     // console.log("Searching city:", enCity);
//   };

//   return (
//     <header className="bg-white dark:bg-gray-800 shadow-2xl dark:shadow-sm dark:shadow-rose-500 h-24">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <img src={weatherLogo} alt="Logo" className="h-16 w-16 mr-2" />
//           <span className="text-xl font-bold text-gray-800 dark:text-white">
//             <span className="font-serif text-4xl drop-shadow-gray-800/60">
//               W
//             </span>
//             eather App
//           </span>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-1 max-w-md mx-4 flex gap-2">
//           <input
//             type="text"
//             placeholder="Enter Postal Code"
//             value={enCity}
//             onChange={(e) => setEnCity(e.target.value)}
//             className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
//           >
//             Search
//           </button>
//         </div>

//         {/* Right side: Dark mode toggle and Sign in/out */}
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={toggleDarkMode}
//             className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
//           >
//             {isDarkMode ? (
//               <svg
//                 className="w-5 h-5 text-yellow-500"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-5 h-5 text-gray-800"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//               </svg>
//             )}
//           </button>

//           <button
//             onClick={handleSignInOut}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             {isSignedIn ? "Sign Out" : "Sign In"}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import weatherLogo from "../resources/weather-app.png";

const Header = ({ city, setCity }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [enCity, setEnCity] = useState(""); // input state

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleSignInOut = () => setIsSignedIn(!isSignedIn);

  const handleSearch = () => {
    setCity(enCity); // send data to parent
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-2xl dark:shadow-sm dark:shadow-rose-500">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-0">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img src={weatherLogo} alt="Logo" className="h-12 w-12 md:h-16 md:w-16 mr-2" />
          <span className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            <span className="font-serif text-3xl md:text-4xl drop-shadow-gray-800/60">
              W
            </span>
            eather App
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full md:max-w-md flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter Postal Code"
            value={enCity}
            onChange={(e) => setEnCity(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Search
          </button>
        </div>

        {/* Right side: Dark mode toggle and Sign in/out */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 md:mt-0">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-gray-800"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            onClick={handleSignInOut}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            {isSignedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

