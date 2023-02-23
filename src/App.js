import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useStateContext} from './contexts/ContextProvider';
import {Home, Gallery, Products, Login} from './pages';
import './App.css';
import Product from './pages/Product';
import siteCurrDown from './data/site-currently-down.png';

const App = () => {
    const {isLoggedIn} = useStateContext();

    return (
        <div className="app">
            {isLoggedIn
                ? <BrowserRouter>
                        <Routes>
                            <Route path="/" element={< Home />}/>
                            <Route path="/home" element={< Home />}/>
                            <Route
                                path="/products"
                                element={< Products parent = {
                                true
                            } />}/>
                            <Route
                                path="/products/:type"
                                element={< Products parent = {
                                false
                            } />}/>
                            <Route path="/gallery" element={< Gallery />}/>
                            <Route path="/product/:id" element={< Product />}/>
                            <Route path="/admin" element={< Login />}/>
                        </Routes>
                    </BrowserRouter>
                : <BrowserRouter>
                    <Routes>
                        <Route path="/" element={
                            <div id="site-cannot-display" className="w-100 h-100 d-flex justify-content-center align-items-center bg-dark">
                                <div className="w-25 h-75 d-flex justify-content-center align-items-center">
                                    <img className="h-100" src={siteCurrDown} alt="Site currently not available" />
                                </div>
                            </div>
                        }/>
                        <Route path="/admin" element={< Login />}/>
                    </Routes>
                </BrowserRouter>}
        </div>
    )
}

export default App
