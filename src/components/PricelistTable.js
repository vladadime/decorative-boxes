import {BsPencilSquare, BsTrashFill} from "react-icons/bs";
import {useStateContext} from "../contexts/ContextProvider.js";
import {ModalDialog} from "./index.jsx";
import {types} from '../data/sample.js';

const PricelistTable = ({productId}) => {
    const {boxTypes, deleteDimension, editDimension, handleFormChange, isLoggedIn} = useStateContext();

    const showEditForm = (row) => {
        return (
            <form>
                <div className="mb-3">
                    <label htmlFor="dimension" className="form-label">Dimenzija</label>
                    <input
                        type="text"
                        className="form-control"
                        id="dimension"
                        defaultValue={`${row.dimension}`}
                        disabled/>
                </div>
                {row
                    .prices
                    .map((price, index) => (
                        <div className="mb-3" key={index}>
                            <label htmlFor={`${price.type}`} className="form-label">{types[price.type].label}</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`${price.type}`}
                                defaultValue={`${price.price} RSD`}
                                onChange={(e) => handleFormChange(e.target)}/>
                        </div>
                    ))}
            </form>
        );
    };

    return (
        <table className="table w-50">
            <thead>
                <tr>
                    <th scope="col">Naziv</th>
                    <th scope="col">Dimenzije</th>
                    {boxTypes[productId]
                        .info[0]
                        .prices
                        .map((item, index) => (
                            <th scope="col" key={index}>{types[item.type].label}</th>
                        ))}
                    {isLoggedIn && <th scope="col">Akcije</th>}
                </tr>
            </thead>
            <tbody>
                {boxTypes[productId]
                    .info
                    .map((item, index) => (
                        <tr key={index}>
                            <td>{boxTypes[productId].label}</td>
                            <td>{item.dimension}</td>
                            {item
                                .prices
                                .map((price, idx) => (
                                    <td key={idx}>{price.price
                                            ? price.price
                                            : ""}RSD</td>
                                ))}
                            {isLoggedIn && <td>
                                <ModalDialog
                                    modalContent={showEditForm(item)}
                                    title="Izmena cena"
                                    buttonActionLabel="Sačuvaj"
                                    onBtnAction={onClick => editDimension(productId, item.dimension, item.prices)}><BsPencilSquare className="text-primary"/></ModalDialog>
                                <ModalDialog
                                    modalContent={"Da li želite da izbrišete dimenziju?"}
                                    title="Brisanje dimenzije"
                                    buttonActionLabel="Izbriši"
                                    onBtnAction={onClick => deleteDimension(item, productId)}><BsTrashFill className="text-primary"/></ModalDialog>
                            </td>}
                        </tr>
                    ))
}
            </tbody>
        </table>
    )
}

export default PricelistTable