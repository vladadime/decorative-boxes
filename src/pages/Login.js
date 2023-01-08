import {useStateContext} from '../contexts/ContextProvider';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {isLoggedIn, setIsLoggedIn} = useStateContext();
    const navigate = useNavigate();
    
    const login = () => {
        var user = "kutijeLetus";
        var username = prompt("Username: ");
        if (username === user) { 
            var pass = "kutije"
            var password = prompt("Password: ");
            if(password === pass) {
                
                setIsLoggedIn(true);
                // alert("You logged in succesfully!");
                navigate("/");
            } else {
                alert("Wrong password!");
            }
        } else {
            alert("Wrong username!");
        }
    }

    const logout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            {console.log(isLoggedIn)}
            { isLoggedIn ? logout() : login() }
            {/* {login()} */}
        </div>
    )
}

export default Login
