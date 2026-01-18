// import { mockWeatherData, weatherData } from "../utils/watherdata";
// import weathernews from "../resources/weather.png";
// import React, { useEffect, useRef, useState } from "react";
// import rainy from "../utils/rainy.png";
// import sunny from "../utils/sunny.png";
// import cloudy from "../utils/cloudy.png";
// import snowy from "../utils/snowy.png";
// import sunnycloudy from "../utils/sunnycloudy.png";
// import wind from "../utils/windy.png";
// import ShimmerCard from "./Shimmer";

// const CARD_WIDTH = 320; // px

// // https://api.zippopotam.us/IN/491001
// const image =[rainy,sunny,cloudy,snowy,sunnycloudy,wind];

// const Lastdays = ({ city }) => {
//   const [index, setIndex] = useState(0);
//   const [data, setData] = useState(null);
//   const totalLength = weatherData.length;
//   const sliderRef = useRef(null);
//   // console.log(city);

//   // AUTO SLIDE
//   useEffect(() => {
//     if (!city) return;

//     const fetchZipData = async () => {
//       try {
//         const res = await fetch(`https://api.zippopotam.us/IN/${city}`);
//         const data = await res.json();
//         setData(data.places);
//         // console.log(data.places);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchZipData();
//   }, [city]);
  

//   return !data ? <ShimmerCard/> : (
//     <div className="w-full overflow-hidden py-10 ">
//       <div
//         ref={sliderRef}
//         className="flex gap-6 transition-transform duration-100 ease-in-out justify-center"
//         style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
//       >
//         {!data && <p>Loading...</p>}

//         {data.map((item, i) => (
//           <div
//             key={i}
//             className="w-[300px] h-[400px] shrink-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
//           >
//             <img
//               src={image[i]}
//               alt={item.title}
//               className="w-auto m-auto  h-40 object-cover rounded mb-3"
//             />
//             <h3 className="text-lg pt-20 font-bold text-gray-800 dark:text-white">
//               {item.longitude} ,{item.longitude},{item["place name"]}
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               State: {item.state}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lastdays;

import React, { useEffect, useRef, useState } from "react";
import ShimmerCard from "./Shimmer"; // Shimmer loader component
import rainy from "../utils/rainy.png";
import sunny from "../utils/sunny.png";
import cloudy from "../utils/cloudy.png";
import snowy from "../utils/snowy.png";
import sunnycloudy from "../utils/sunnycloudy.png";
import wind from "../utils/windy.png";

const CARD_WIDTH = 300; // px
const images = [rainy, sunny, cloudy, snowy, sunnycloudy, wind];

const Lastdays = ({ city }) => {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState(null);
  const sliderRef = useRef(null);

  // FETCH DATA
  useEffect(() => {
    if (!city) return;

    const fetchZipData = async () => {
      try {
        const res = await fetch(`https://api.zippopotam.us/IN/${city}`);
        const jsonData = await res.json();
        setData(jsonData.places);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // avoid infinite loading
      }
    };

    fetchZipData();
  }, [city]);

  // AUTO SLIDE (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!data) return;
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data]);

  if (!data) return <ShimmerCard />;

  return (
    <div className="w-full py-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white text-center">
        Weather Info for Last Days
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <div
          ref={sliderRef}
          className="flex gap-6"
          style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] sm:w-[300px] h-[400px] bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={images[i % images.length]}
                alt={item["place name"]}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                {item["place name"]}, {item["state"]}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Longitude: {item.longitude} | Latitude: {item.latitude}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lastdays;
