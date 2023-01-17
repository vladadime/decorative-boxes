import React, {createContext, useContext, useState, useEffect} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [boxTypes, setBoxTypes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDataFromServer = async () => {
            const dataFromServer = await getData();
            setBoxTypes(dataFromServer);
            setLoading(true);
        }
        getDataFromServer();
    }, []);

    const getData = async () => {
        const res = await fetch("https://decorative-boxes-6255a-default-rtdb.firebaseio.com/data/-NLl9W4E3mD9xvDy3TR7.json");
        const data = await res.json();

        return data
    }

    const getCurrentProduct = (id) => {
        return boxTypes.find((item) => item.id === id);
    }

    const deleteDimension = async (currentDimension, id) => {
        const currProduct = getCurrentProduct(id);
    
        const newProduct = currProduct.info.filter((item) => item.dimension !== currentDimension.dimension);
    
        boxTypes[id].info = newProduct;
    
        // setboxTypes(boxTypes);
    
        const res = await fetch("https://decorative-boxes-6255a-default-rtdb.firebaseio.com/data/-NLl9W4E3mD9xvDy3TR7.json", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
    
            body: JSON.stringify(boxTypes)
        }).then(response => response.json()).then((data) => {
            setBoxTypes(data);
        })
        // then(data => this.setState({ postId: data.id }));
      };

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
            isLoggedIn, setIsLoggedIn, boxTypes, setBoxTypes, loading, getCurrentProduct, login, logout, deleteDimension
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);