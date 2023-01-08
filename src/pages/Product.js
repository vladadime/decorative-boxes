import {Layout, Table, ModalDialog} from '../components';
import {boxTypes, types} from '../data/sample.js';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {storage} from '.././firebase';
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';
import Carousel from 'react-bootstrap/Carousel';
import {showNewForm} from "../components/Forms";


const Product = () => {
    const params = useParams();

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

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

    const currProduct = boxTypes.find((item) => item.id == params.id);
    return (
        <Layout>
            <div className="d-flex justify-content-end" id="gallery-actions">
                
                <button type="button" className="btn btn-primary mx-1">Dodaj Sliku</button>
                <ModalDialog modalContent={ <input multiple type="file" onChange={(event) => {setImageUpload(event.target.files)}} onClick={uploadImage} /> } title="Dodavanje slika" buttonActionLabel="Dodaj">Dodaj slike</ModalDialog>
                <button type="button" className="btn btn-primary mx-1">Obriši Sliku</button>
            </div>
            <div className="row justify-content-center mt-5">
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
                    <Table product={currProduct} params={params} />
                    <ModalDialog modalContent={ showNewForm(currProduct.info[0]) } title="Dodavanje cena" buttonActionLabel="Sačuvaj">Dodaj dimenziju</ModalDialog>
                </div>
            </div>
        </Layout>
    )
}

export default Product
