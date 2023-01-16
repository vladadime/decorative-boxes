import { useNavigate } from "react-router-dom";
import {useStateContext} from '../contexts/ContextProvider';

const Login = () => {
    const {login, logout} = useStateContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        
        navigate("/");
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={handleLogin()}>Login</button>
            <button className="btn btn-primary" onClick={logout}>Logout</button>
        </div>
    )
}

export default Login
