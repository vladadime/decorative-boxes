import {Layout, Table, ModalDialog} from '../components';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {storage} from '.././firebase';
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';
import Carousel from 'react-bootstrap/Carousel';
import {showNewForm} from "../components/Forms";
import { useStateContext } from '../contexts/ContextProvider';


const Product = () => {
    const params = useParams();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const {boxTypes, setBoxTypes, getCurrentProduct, isLoggedIn} = useStateContext();

    // const imageListRef = ref(storage, `images/id_${params.id}`);
    const imageListRef = ref(storage, `images/`);
    const uploadImage = () => {
        if(imageUpload == null) {
            return;
        } 
        console.log(imageUpload);
        for(let i = 0; i < imageUpload.length; i++) {
            const imageRef = ref(storage, `images/id_${params.id}_${imageUpload[i].name + v4()}`);
            uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
                var name = imageUpload[i].name;
                var index = parseInt(name.substring(name.indexOf("id_") + 3, name.indexOf("_IMG_")));
                getDownloadURL(snapshot.ref).then((url) => {
                    if(index === parseInt(params.id))
                    setImageList((prev) => [...prev, url]);
                });
            });
            alert("Images uploaded");
        }

        // const imageRef = ref(storage, `images/id_${params.id}_${imageUpload.name + v4()}`);
        // uploadBytes(imageRef, imageUpload).then((snapshot) => {
        //     getDownloadURL(snapshot.ref).then((url) => {
        //         setImageList((prev) => [...prev, url]);
        //         alert("Image uploaded");
        //     });
        // });
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                var name = item.name;
                var index = parseInt(name.substring(name.indexOf("id_") + 3, name.indexOf("_IMG_")));
                getDownloadURL(item).then((url) => {
                    // console.log(imageList);
                    if(index === parseInt(params.id))
                    setImageList((prev) => [...prev, url]);
                });
                // console.log(item);
            });
        });
    }, []);

    // const postData = async (event) => {
    //     event.preventDefault();

    //     const details = {fname: "Vladan", lname: "Dimitrijevic", email: "dime.97@hotmail.com"}

    //     const res = await fetch("https://decorative-boxes-6255a-default-rtdb.firebaseio.com/data.json", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },

    //         body:JSON.stringify(boxTypes)
    //     });
    // };

    const saveData = async () => {
        // event.preventDefault();

        var dimension = document.querySelector("form #dimension").value;
        var inputs = document.querySelectorAll("form input");

        var isExist = currProduct.info.find((item) => item.dimension === dimension);
        var prices = [];
        for(let i = 1; i < inputs.length; i++) {
            var obj = {
                price: parseInt(inputs[i].value),
                type: parseInt(inputs[i].id),
            }
            prices.push(obj);
        }

        var object = {};

        if(isExist === undefined) {
            object = {
                dimension: dimension,
                prices: prices,
            };

            currProduct.info.push(object);
            
            boxTypes[parseInt(params.id)].info = currProduct.info;

            const res = await fetch("https://decorative-boxes-6255a-default-rtdb.firebaseio.com/data/-NLl9W4E3mD9xvDy3TR7.json", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(boxTypes)
            }).then(response => response.json()).then((data) => {
                setBoxTypes(data);
            });
        }
    }

    const currProduct = getCurrentProduct(parseInt(params.id));
    return (
        <Layout>
            {boxTypes.length &&
            <>
                {/* {isLoggedIn && <div className="d-flex justify-content-end" id="gallery-actions">
                    <button type="button" className="btn btn-primary mx-1">Dodaj Sliku</button>
                    <ModalDialog modalContent={ <input multiple type="file" onChange={(event) => {setImageUpload(event.target.files)}} onClick={uploadImage} /> } title="Dodavanje slika" buttonActionLabel="Dodaj">Dodaj slike</ModalDialog>
                    <button type="button" className="btn btn-primary mx-1">Obriši Sliku</button>
                </div>} */}
                <div className="d-flex justify-content-end" id="gallery-actions">
                    <button type="button" className="btn btn-primary mx-1">Dodaj Sliku</button>
                    <ModalDialog modalContent={ <input multiple type="file" onChange={(event) => {setImageUpload(event.target.files)}} onClick={uploadImage} /> } title="Dodavanje slika" buttonActionLabel="Dodaj">Dodaj slike</ModalDialog>
                    <button type="button" className="btn btn-primary mx-1">Obriši Sliku</button>
                </div>
                <div className="row justify-content-center mt-5" style={{width: "99%"}}>
                    <div className="col-lg-7">
                        <Carousel className="shadow-lg" fade>
                            {imageList.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <img src={item} className="d-block w-100" alt="..." height="500"></img>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div id="info-container" className="d-flex justify-content-center mt-5 pt-5">
                        <Table product={boxTypes[params.id]} productId={params.id} />
                        {/* {isLoggedIn && <ModalDialog modalContent={ showNewForm(currProduct.info[0]) } title="Dodavanje cena" buttonActionLabel="Sačuvaj" onBtnAction={saveData}>Dodaj dimenziju</ModalDialog>} */}
                        <ModalDialog modalContent={ showNewForm(boxTypes[params.id].info ? boxTypes[params.id].info[0] : boxTypes[params.id].types) } title="Dodavanje cena" buttonActionLabel="Sačuvaj" onBtnAction={saveData}>Dodaj dimenziju</ModalDialog>
                    </div>
                </div>
            </>
            }
        </Layout>
    )
}

export default Product
