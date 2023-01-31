import {useEffect} from 'react';
import {useStateContext} from '../contexts/ContextProvider';
import {Layout} from '../components';
import noImage from '../data/no-image.png';

const Gallery = () => {
    const {imageList, getImages} = useStateContext();
    const imageListRef = `images/`;

    useEffect(() => {
        getImages(imageListRef);
    }, []);

    return (
        <Layout>
            <div className="container py-5">
                <div className="portfolio-item row">
                    {imageList
                        ? imageList.map((url, index) => (
                            <div key={index} className="item selfie col-lg-3 col-md-4 col-6 py-2">
                                <a href={url} className="fancylight popup-btn" data-fancybox-group="light">
                                    {/* img-fluid removed from className */}
                                    <img id="gallery-img" src={url} alt=""/>
                                </a>
                            </div>
                        ))
                        : <img src={noImage} className="d-block w-100" alt="..." height="500"/>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Gallery
