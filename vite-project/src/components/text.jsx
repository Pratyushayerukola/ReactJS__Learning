import { useContext } from "react";
import { GlobalContext } from "../context";

function ContextText(){
    const {theme}=useContext(GlobalContext);
    return <h1 style={{fontSize:theme==='light' ? '50px' : '100px'}}>Theme Changed</h1>;
}

export default ContextText;