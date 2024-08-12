import { Navigate } from "react-router-dom";


const RutasProtegidas = ({children}) => {
    const userAdmin = JSON.parse(sessionStorage.getItem("usuariofitfactory")) || null
    if (!userAdmin){
        return <Navigate to={"/login"}></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidas;