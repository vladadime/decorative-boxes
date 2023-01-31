import {Header, Footer} from './';

const Layout = ({children}) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header/> {children}
            <Footer/>
        </div>
    )
}

export default Layout
