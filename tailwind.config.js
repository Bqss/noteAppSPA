const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode : "class"
    ,
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                "primary-dark": "#141517",
                "primary-light": "#F1F3F5",
                "secondary-light": "#FFF",
                "secondary-dark": "#25262B ",
                "text-dark": "#DDE1E5",
                "text-light": "#495057",
                "link": "#364FC7",
                "theme-button-dark": "#332B4D",
                "theme-button-light": "#FFF9DB",
                "navButton-dark": "#2A304E",
                "navButton-light": "#EDF2FF",
                "btn-delete-dark": "#4B282C",
                "btn-archive-dark": "#203B37",
                "btn-detail-dark": "#203941",
                "btn-delete-light": "#FFF5F5",
                "btn-archive-light": "#E6FCF5",
                "btn-detail-light": "#E3FAFC",
            },
            fontFamily: {
                nunito: "Nunito, sans-serif",
            },
            backgroundImage: {
                search: "url('/images/search.svg')",
            },
            backgroundPosition: {
                "bg-left-2": "left .5rem center",
            },
        },
    },

    plugins: [
  
        require("tailwind-scrollbar"),
        require("@tailwindcss/line-clamp"),
    ],
    variants:{
        scrollbar : ["rounded"]
    }
};
