import {Layout} from '../components';
import {useState, useEffect} from 'react';
import {storage} from '.././firebase';
import {ref, listAll, getDownloadURL } from 'firebase/storage';

const Gallery = () => {
    const [imageList, setImageList] = useState([]);
    const imageListRef = ref(storage, "images/");

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        });
    }, []);
    return (
        <Layout>
            <div className="container py-5">
                <div className="portfolio-item row">
                    {imageList.map((url, index) => (
                        <div key={index} className="item selfie col-lg-3 col-md-4 col-6 py-2">
                            <a href={url} className="fancylight popup-btn" data-fancybox-group="light">
                                <img width="250px" height="250px" className="img-fluid" src={url} alt="" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Gallery
