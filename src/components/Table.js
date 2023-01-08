import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import {types} from '../data/sample.js';
import { ModalDialog } from "./";
import {showEditForm} from "../components/Forms";

const Table = ({product}) => {

  return (
    <table className="table w-50">
        <thead>
            <tr>
              <th scope="col">Naziv</th>
              <th scope="col">Dimenzije</th>
              {product.info[0].prices.map((item, index) => (<th scope="col" key={index}>{types[item.type].label}</th>))}
              <th scope="col">Akcije</th>
            </tr>
        </thead>
        <tbody>
            {
                product.info.map((item, index) => (
                    <tr key={index}>
                        <td>{product.label}</td>
                        <td>{item.dimension}</td>
                        {item.prices.map((price, idx) => (<td key={idx}>{price.price ? price.price : ""}RSD</td>))}
                        <td>
                          <ModalDialog modalContent={ showEditForm(item) } title="Izmena cena" buttonActionLabel="Sačuvaj"><BsPencilSquare className="text-primary" /></ModalDialog>
                          <ModalDialog modalContent={ "Da li želite da izbrišete dimenziju?" } title="Brisanje dimenzije" buttonActionLabel="Izbriši"><BsTrashFill className="text-primary" /></ModalDialog>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Table
