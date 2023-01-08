import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Gallery, Products, Login} from './pages';
import './App.css';
import Product from './pages/Product';

const App = () => {
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Home />}/>
                    <Route path="/home" element={< Home />}/>
                    <Route path="/products" element={< Products parent={true} />}/>
                    <Route path="/products/:type" element={< Products parent={false} />}/>
                    <Route path="/gallery" element={< Gallery />}/>
                    <Route path="/product/:id" element={< Product />}/>
                    <Route path="/admin" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
