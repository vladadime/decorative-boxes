import {Link, useParams} from 'react-router-dom';
import {useStateContext} from '../contexts/ContextProvider';
import {Layout, CardBox} from '../components';
import decoBoxes from '../data/deco-boxes.jpg';

const Item = ({item, path}) => {
    return (
        <Link
            to={path}
            key={item.id}
            className="col-12 col-sm-6 col-md-4 col-xl-3 text-decoration-none">
            <CardBox img={decoBoxes} title={item.label} id={item.id}/>
        </Link>
    );
};

const Products = ({parent}) => {
    const params = useParams();
    const {boxTypes} = useStateContext();

    return (
        <Layout>
            <div id="products-list" className="row ps-5 pe-3 my-5">
                {parent
                    ? boxTypes.map((item) => item.hasChilds
                        ? <Item item={item} path={`/products/${item.type}`}/>
                        : (item.boxType_id === undefined && <Item item={item} path={"/product/" + item.id}/>))
                    : (boxTypes.map((item) => (item.type === params.type && item.boxType_id !== undefined) && <Item item={item} path={"/product/" + item.id}/>))}
            </div>
        </Layout>
    )
}

export default Products
