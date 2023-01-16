import React, {createContext, useContext, useState, useEffect} from 'react';
import { boxTypes } from "../data/sample.js";
import { db } from ".././firebase.js";
import { collection, doc, getDocs } from "firebase/firestore";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [boxTypes2, setBoxTypes2] = useState([]);
    const [loading, setLoading] = useState(false);
    const dataCollectionRef = collection(db, "data");
    // const navigate = useNavigate();

    useEffect(() => {
        const getDataFromServer = async () => {
            const dataFromServer = await getData();
            setBoxTypes2(dataFromServer);
            setLoading(true);
        }
        getDataFromServer();
    }, []);

    const getData = async () => {
        const res = await fetch("https://decorative-boxes-6255a-default-rtdb.firebaseio.com/data/-NLl9W4E3mD9xvDy3TR7.json");
        const data = await res.json();

        return data
    }

    // useEffect(() => {
    //     const getDataFromDB = async () => {
    //         const data = await getDocs(dataCollectionRef);
    //         setBoxTypes2(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    //         // setBoxTypes2(dataFromServer);
    //         // setLoading(true);
    //         console.log(data.docs[0].data());
    //         console.log(boxTypes2);
    //     }
    //     getDataFromDB();
    // }, []);

    const getCurrentProduct = (id) => {
        return boxTypes2.find((item) => item.id === id);
    }

    const login = () => {
        console.log("Hello");
        var user = "admin";
        var username = prompt("Username: ");
        if (username === user) { 
            var pass = "admin"
            var password = prompt("Password: ");
            if(password === pass) {
                
                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', true);
                // alert("You logged in succesfully!");
                // navigate("/");
            } else {
                alert("Wrong password!");
            }
        } else {
            alert("Wrong username!");
        }
    }

    const logout = () => {
        console.log("i am in");
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', false);
    }

    const [activeMenu,
        setActiveMenu] = useState(true);
    const [isClicked,
        setIsClicked] = useState(initialState);
    const [screenSize,
        setScreenSize] = useState(undefined);
    const [currentColor,
        setCurrentColor] = useState('#03C9D7');
    const [currentMode,
        setCurrentMode] = useState('Light');
    const [themeSettings,
        setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    }

    const handleClick = (clicked) => {
        // nejasna mi je struktura, tacnije sta ova funkcija prima kao
        // argument(setIsClicked)
        setIsClicked({
            ...initialState,
            [clicked]: true
        });
    }

    return (
        <StateContext.Provider
            value={{
            isLoggedIn, setIsLoggedIn, boxTypes2, setBoxTypes2, loading, getCurrentProduct, login, logout
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);