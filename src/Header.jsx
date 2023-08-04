import { useEffect, useState } from "react";
import MoonIcon from "./components/icons/IconMoon";
import IconSun from "./components/icons/IconSun";

// initialStateDarkMode comprueba el theme por defecto del sistema operativo

const initialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.theme = 'light'
    }
  },[darkMode])

  return (
    <header>
      <div className="container flex justify-between mx-auto px-4 py-8 md:max-w-xl ">
        <h1 className="uppercase text-white font-semibold text-3xl tracking-[0.2em]">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;

// import MoonIcon from "./components/icons/IconMoon";

// const Header = () => {
//   return (
//   <header className="container mx-auto px-4 pt-8">
//     <div className="flex justify-between"><h1 className="uppercase text-white text-3xl font-semibold tracking-[0.2em]">Lista de tareas</h1>
//     <button><MoonIcon/></button></div>

//     </header>
//   );
// };

// export default Header;
