import {Layout, CardBox} from '../components';
import decoBoxes from '../data/deco-boxes.jpg';
import {boxTypes} from '../data/sample.js';
import {Link, useParams} from 'react-router-dom';
// import { useState, useEffect } from "react"
// import axios from "axios";

const Products = ({parent}) => {
    const params = useParams();

    // console.log(params);
    // const [posts, setPosts] = useState([])
    
    // useEffect(()=> {
    //     // axios.get(`http://localhost:3000/products/${params.id}`)
    //     axios.get(`http://localhost:3000/products/${params.type}`)
    //     .then(res => {
    //         console.log(res)
    //         setPosts(res.data)
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }, [params.id])

    return (
        <Layout>
            <div className="row mt-5">
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
