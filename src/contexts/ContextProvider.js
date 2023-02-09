import React, {createContext, useContext, useState, useEffect} from 'react';
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {v4} from 'uuid';
import {app, storage} from '../firebase';

const StateContext = createContext();

export const ContextProvider = ({children}) => {

    const [boxTypes,
        setBoxTypes] = useState([]);
    const [imageUpload,
        setImageUpload] = useState(null);
    const [imageList,
        setImageList] = useState([]);
    const [email,
        setEmail] = useState("");
    const [password,
        setPassword] = useState("");
    const auth = getAuth(app);
    const [errorMessage,
        setErrorMessage] = useState("");
    const [dimension,
        setDimension] = useState("");
    const [prices,
        setPrices] = useState([]);
    const dataUrl = "https://decorative-boxes-6255a-default-rtdb.firebaseio.com/data/-NLl9W4E3mD9xvDy" +
            "3TR7.json";
    // const appUrl = "http://localhost:3000/";
    const appUrl = "https://kutijeicveceletus.netlify.app/"; 
    // const isLoggedIn = sessionStorage.getItem("isLoggedIn") === ("true" || true) ? true : false;
    const isLoggedIn = localStorage.getItem("isLoggedIn") === ("true" || true)
        ? true
        : false;

    const handleFormChange = (e) => {
        if (e.id === "dimension") {
            setDimension(e.value);
        } else {
            const type = parseInt(e.id);
            const val = e.value;
            if (type !== undefined && val) {
                var index = -1;
                for (let i = 0; i < prices.length; i++) {
                    if (prices[i].type === type) {
                        index = i;
                    }
                }
                if (index !== -1) {
                    if (prices[index]) {
                        prices[index].price = val;
                    }
                } else {
                    setPrices([
                        ...prices, {
                            type: type,
                            price: val
                        }
                    ]);
                }
            }
        }
    };

    const resetFormValues = () => {
        setDimension("");
        setPrices([]);
    };

    const signIn = () => {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in ...
        }).catch((error) => {
            if (error.message) {
                setErrorMessage(error.message);
            }
        });
    }

    const signUp = () => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            localStorage.setItem('isLoggedIn', true);
            // sessionStorage.setItem('isLoggedIn', true);
            window
                .location
                .replace(appUrl);
        }).catch((error) => {
            if (error.message) {
                setErrorMessage(error.message);
            }
        });
    };

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful. sessionStorage.setItem('isLoggedIn', false);
            localStorage.setItem('isLoggedIn', false);
            window
                .location
                .reload();
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        });
    };

    const uploadImage = (productID) => {
        if (imageUpload == null) {
            return;
        }
        for (let i = 0; i < imageUpload.length; i++) {
            var imageRef = "";
            if (productID) {
                imageRef = ref(storage, `images/id_${productID}_${imageUpload[i].name + v4()}`);
            } else {
                imageRef = ref(storage, `images/home/${imageUpload[i].name + v4()}`);
            }
            uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [
                        ...prev,
                        url
                    ]);
                });
            });
        }
        // alert("Images uploaded");
    };

    const getImages = (imgRef, productID) => {
        const imageListRef = ref(storage, imgRef);
        setImageList([]);
        listAll(imageListRef).then((response) => {
            response
                .items
                .forEach((item) => {
                    if (productID) {
                        var name = item.name;
                        var index = parseInt(name.substring(name.indexOf("id_") + 3, name.indexOf("_IMG_")));
                    }
                    getDownloadURL(item).then((url) => {
                        if (productID) {
                            if (index === parseInt(productID)) 
                                setImageList((prev) => [
                                    ...prev,
                                    url
                                ]);
                            }
                        else {
                            setImageList((prev) => [
                                ...prev,
                                url
                            ]);
                        }
                    });
                });
        });
    };

    useEffect(() => {
        const getDataFromServer = async() => {
            const dataFromServer = await getData();
            setBoxTypes(dataFromServer);
        }
        getDataFromServer();
    }, []);

    const getData = async() => {
        const res = await fetch(dataUrl);
        const data = await res.json();

        return data
    }

    const getCurrentProduct = (id) => {
        return boxTypes.find((item) => item.id === id);
    }

    const deleteDimension = async(currentDimension, id) => {
        const currProduct = getCurrentProduct(id);

        const newProduct = currProduct
            .info
            .filter((item) => item.dimension !== currentDimension.dimension);

        boxTypes[id].info = newProduct;

        await fetch(dataUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

                body: JSON.stringify(boxTypes)
            })
            .then(response => response.json())
            .then((data) => {
                setBoxTypes(data);
            })
    };
    const editDimension = async(id, currentDimension, currentPrices) => {
        const currentProduct = boxTypes[id];

        for (let i = 0; i < prices.length; i++) {
            for (let j = 0; j < currentPrices.length; j++) {
                if (currentPrices[j].type === prices[i].type) {
                    currentPrices[j].price = prices[i].price;
                }
            }
        }

        const object = {
            dimension: currentDimension,
            prices: currentPrices
        };

        for (let i = 0; i < currentProduct.info.length; i++) {
            if (currentProduct.info[i].dimension === currentDimension) {
                currentProduct.info[i] = object;
            }
        }

        boxTypes[id].info = currentProduct.info;

        await fetch(dataUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

                body: JSON.stringify(boxTypes)
            })
            .then(response => response.json())
            .then((data) => {
                setBoxTypes(data);
            });
    };

    const addDimension = async(productID) => {
        const currentProduct = boxTypes[productID]
        var isExist = true;
        if (currentProduct.info) {
            isExist = currentProduct
                .info
                .find((item) => item.dimension === dimension);
        } else {
            isExist = false;
            boxTypes[productID].info = [];
        }

        if (!isExist) {
            const object = {
                dimension: dimension,
                prices: prices
            };

            boxTypes[productID]
                .info
                .push(object);

            await fetch(dataUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },

                    body: JSON.stringify(boxTypes)
                })
                .then(response => response.json())
                .then((data) => {
                    setBoxTypes(data);
                });
        }
    }

    return (
        <StateContext.Provider
            value={{
            boxTypes,
            setBoxTypes,
            getCurrentProduct,
            deleteDimension,
            editDimension,
            addDimension,
            uploadImage,
            setImageUpload,
            imageList,
            setImageList,
            setEmail,
            setPassword,
            signIn,
            signUp,
            logout,
            isLoggedIn,
            errorMessage,
            dimension,
            prices,
            handleFormChange,
            resetFormValues,
            getImages,
            appUrl
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
