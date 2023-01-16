import {Layout, CardBox} from '../components';
import decoBoxes from '../data/deco-boxes.jpg';
import {boxTypes} from '../data/sample.js';
import {Link, useParams} from 'react-router-dom';

const Products = ({parent}) => {
    const params = useParams();

    return (
        <Layout>
            <div className="row ps-5 pe-3 my-5" style={{width: "99%"}}>
                {
                    parent ? (
                    boxTypes.map((item) => (item.hasChilds) ? (
                    <Link to={"/products/" + item.type} key={item.id} className="col-md-3 text-decoration-none">
                        <CardBox img={decoBoxes} title={item.label} id={item.id} />
                    </Link>
                    ) : (item.boxType_id === undefined ? 
                        <Link to={"/product/" + item.id} key={item.id} className="col-md-3 text-decoration-none">
                            <CardBox img={decoBoxes} title={item.label} id={item.id} />
                        </Link> : ""
                        )
                    )
                ) : (
                    boxTypes.map((item) => (item.type === params.type && item.boxType_id !== undefined) ? (
                        <Link to={"/product/" + item.id} key={item.id} className="col-md-3 text-decoration-none">
                            <CardBox img={decoBoxes} title={item.label} id={item.id} />
                        </Link>
                        ) : ""
                )
                )
                }
            </div>
        </Layout>
    )
}

export default Products
