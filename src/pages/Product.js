import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { useStateContext } from '../contexts/ContextProvider';
import {Layout, PricelistTable, ModalDialog} from '../components';
import noImage from '../data/no-image.png';

const Product = () => {
    const params = useParams();
    const {boxTypes, addDimension, imageList, uploadImage, setImageUpload, getImages, handleFormChange, isLoggedIn} = useStateContext();
    const productID = parseInt(params.id);
    const imageListRef = `images/`;

    useEffect(() => {
        getImages(imageListRef, productID);
    }, []);

    const showNewForm = (product) => {
        var row = product.types;
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="dimension" className="form-label">Dimenzija</label>
                    <input type="text" className="form-control" id="dimension" placeholder="NxM" onChange={(e) => handleFormChange(e.target)} />
                </div>
                {row.map((price, index) => (
                        <div className="mb-3" key={index}>
                            <label htmlFor={price.type} className="form-label">{price.label}</label>
                            <input
                                type="text"
                                className="form-control"
                                id={price.type}
                                placeholder="RSD"
                                onChange={(e) => handleFormChange(e.target)}/>
                        </div>
                    ))}
            </form>
        );
    };

    return (
        <Layout>
            {boxTypes.length &&
            <>
                {isLoggedIn && <div className="d-flex justify-content-end" id="gallery-actions">
                    <button type="button" className="btn btn-primary mx-1" onClick={(e) => uploadImage(productID)}>Dodaj Slike</button>
                    <input multiple type="file" onChange={(event) => {setImageUpload(event.target.files)}}/>
                    <button type="button" className="btn btn-danger mx-1 d-none">Obri??i Sliku</button>
                </div>}
                <div id="product-carousel" className="row justify-content-center mt-5 mx-1">
                    <div className="col-lg-7">
                        {imageList.length ? 
                        <Carousel className="shadow-lg" fade>
                            {imageList.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <img src={item} className="d-block w-100" alt="..." height="500"></img>
                                </Carousel.Item>
                            ))}
                        </Carousel> : <img src={noImage} className="d-block w-100" alt="..." height="500" />
                        }
                    </div>
                    <div id="info-container" className="d-flex justify-content-center my-5 pt-5">
                        {boxTypes[productID].info ? <PricelistTable productId={productID} /> : <div>Ne postoji cenovnik za ovaj proizvod</div>}
                        {isLoggedIn && <ModalDialog modalContent={ showNewForm(boxTypes[productID]) } title="Dodavanje cena" buttonActionLabel="Sa??uvaj" onBtnAction={(e) => addDimension(productID)}>Dodaj cene</ModalDialog>}
                    </div>
                </div>
            </>
            }
        </Layout>
    )
}

export default Product
