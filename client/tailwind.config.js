/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-seriff"],
      },
      backgroundImage: {
        bgImg:
          "url(https://media.istockphoto.com/id/501947761/photo/flooring-thermoplastic-silicone.jpg?s=612x612&w=0&k=20&c=fyeqsRZczjbBH9ZPjV_9TLvIp8rvVRHJCVx1BfQ7q7o=)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
