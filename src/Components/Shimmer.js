// import React from "react";

// const Shimmer = () => {
//   const shimmerCards = Array(12).fill(0); // total cards

//   return (
//     <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-[1400px]">
//         {shimmerCards.map((_, index) => (
//           <div
//             key={index}
//             className="relative w-full h-48 rounded-lg bg-gray-300 dark:bg-gray-700 overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"></div>

//             <div className="p-4 flex flex-col justify-end h-full">
//               <div className="h-6 w-3/4 bg-gray-400 dark:bg-gray-600 rounded mb-2"></div>
//               <div className="h-4 w-1/2 bg-gray-400 dark:bg-gray-600 rounded"></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shimmer;

import React from "react";

const Shimmer = () => {
  const shimmerCards = Array(12).fill(0); // total cards

  return (
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-[1400px]">
        {shimmerCards.map((_, index) => (
          <div
            key={index}
            className="relative w-full h-40 sm:h-48 rounded-lg bg-gray-300 dark:bg-gray-700 overflow-hidden"
          >
            {/* Shimmer Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"></div>

            {/* Card Placeholder Content */}
            <div className="p-3 sm:p-4 flex flex-col justify-end h-full">
              <div className="h-5 sm:h-6 w-3/4 bg-gray-400 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-3 sm:h-4 w-1/2 bg-gray-400 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
