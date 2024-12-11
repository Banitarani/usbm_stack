/* eslint-disable no-unused-vars*/
import { createContext } from "react"; 
 
const ThemeContext = createContext();

export const ThemeProvider = ({Children}) =>{
const [theme , setTime] = useState("");

const toggleTheme = ()=>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
};
return (
<ThemeContext.provider value = {{ theme, toggleTheme}}> 
    {Children}
</ThemeContext.provider>


);
};

export default ThemeContext;