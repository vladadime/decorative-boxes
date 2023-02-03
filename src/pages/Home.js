import {useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {useStateContext} from '../contexts/ContextProvider';
import {Layout} from '../components';
import noImage from '../data/no-image.png';

const Home = () => {
    const {isLoggedIn, getImages, imageList, setImageUpload, uploadImage} = useStateContext();
    const imageListRef = `images/home/`;

    useEffect(() => {
        getImages(imageListRef);
    }, []);

    return (
        <Layout>
            {isLoggedIn && <div className="d-flex justify-content-end" id="gallery-actions">
                <input
                    multiple
                    type="file"
                    onChange={(event) => {
                    setImageUpload(event.target.files)
                }}/>
                <button type="button" className="btn btn-primary mx-1" onClick={uploadImage}>Dodaj Sliku</button>
                <button type="button" className="btn btn-danger mx-1 d-none">Obriši Sliku</button>
            </div>}
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-7">
                        {imageList.length
                            ? <Carousel className="shadow-lg" fade>
                                    {imageList.map((item, index) => (
                                        <Carousel.Item key={index} interval={2000}>
                                            <img src={item} className="d-block w-100" alt="..." height="500"></img>
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            : <img src={noImage} className="d-block w-100" alt="..." height="500"/>
                        }
                    </div>
                    <div className="col-lg-8 mt-4">
                        <p>"Kutije Letus" je porodična firma sa dugogodišnjim iskustvom nastala iz želje
                            da ručno radjenim elemetima da svoj pečat.</p>
                        <p>Bavimo se izradom i prodajom svojih dokarativnih kutija i drugih srodnih
                            artikala za cvećare i poklon šopove, firme i pojedince koji se bave dokoracijom
                            objekata.</p>
                        <p>Uz poštovanje naših saradnika i njihovih želja i potreba, trudimo se da
                            kvalitetom naših proizvoda i poštovanjem dogovorenih rokova, na obostrano
                            zadovoljstvo donesemo radost, jer "Letus" znači radost.</p>
                        <p>Zavirite u naš svet...</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
