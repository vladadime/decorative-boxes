import {Layout} from '../components';
import {images} from '../data/sample.js';
import { useState, useEffect } from 'react';
import {storage} from '.././firebase';
import {ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);

    // const imageListRef = ref(storage, `images/id_${params.id}`);
    const imageListRef = ref(storage, `images/home/`);
    const uploadImage = () => {
        if(imageUpload == null) {
            return;
        } 
        console.log(imageUpload);
        for(let i = 0; i < imageUpload.length; i++) {
            const imageRef = ref(storage, `images/home/${imageUpload[i].name + v4()}`);
            uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
            alert("Images uploaded");
        }
    };

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    // console.log(imageList);
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return (
        <Layout>
            <div className="d-flex justify-content-end" id="gallery-actions">
                <input multiple type="file" onChange={(event) => {setImageUpload(event.target.files)}} />
                <button type="button" className="btn btn-primary mx-1" onClick={uploadImage}>Dodaj Sliku</button>
            </div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-7">
                        <Carousel className="shadow-lg" fade>
                            {imageList.map((item, index) => (
                                <Carousel.Item key={index} interval={2000}>
                                    <img src={item} className="d-block w-100" alt="..." height="500"></img>
                                </Carousel.Item>
                            ))}
                            
                        </Carousel>
                    </div>
                    <div className="col-lg-8 mt-4">
                        <p>"Kutije Letus" je porodična firma sa dugogodišnjim iskustvom nastala iz želje da ručno radjenim elemetima da svoj pečat.</p>
                        <p>Bavimo se izradom i prodajom svojih dokarativnih kutija i drugih srodnih artikala za cvećare i poklon šopove, firme i pojedince koji se bave dokoracijom objekata.</p>
                        <p>Uz poštovanje naših saradnika i njihovih želja i potreba, trudimo se da kvalitetom naših proizvoda i poštovanjem dogovorenih rokova, na obostrano zadovoljstvo donesemo radost, jer "Letus" znači radost.</p>
                        <p>Zavirite u naš svet...</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
