import { BsPencilSquare, BsTrashFill } from "react-icons/bs";
import {types} from '../data/sample.js';
import { ModalDialog } from "./";
import {showEditForm} from "../components/Forms";
import { useStateContext } from "../contexts/ContextProvider.js";

const Table = ({product, productId}) => {
  const {isLoggedIn, boxTypes, setBoxTypes, deleteDimension} = useStateContext();

  const saveData = async () => {
        var currentDimension = document.querySelector("form #dimension").value;
        var inputs = document.querySelectorAll("form input");

        var prices = [];
        for(let i = 1; i < inputs.length; i++) {
            var obj = {
                price: parseInt(inputs[i].value),
                type: parseInt(inputs[i].id),
            }
            prices.push(obj);
        }

        var object = {};

        object = {
            dimension: currentDimension,
            prices: prices,
        };

        let currentProduct = boxTypes[productId]

        for(let i = 0; i < currentProduct.info.length; i++) {
          if(currentProduct.info[i].dimension === currentDimension) {
            currentProduct.info[i] = object;
          }
        }
        console.log(currentProduct.info);
        boxTypes[product.id].info = currentProduct.info;

        console.log(currentProduct.info);

        await fetch("https://decorative-boxes-6255a-default-rtdb.firebaseio.com/data/-NLl9W4E3mD9xvDy3TR7.json", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(boxTypes)
        }).then(response => response.json()).then((data) => {
          console.log(data);
          setBoxTypes(data);
      });
  };

  return (
    <table className="table w-50">
        <thead>
            <tr>
              <th scope="col">Naziv</th>
              <th scope="col">Dimenzije</th>
              {boxTypes[productId].info[0].prices.map((item, index) => (<th scope="col" key={index}>{types[item.type].label}</th>))}
              {/* {isLoggedIn && <th scope="col">Akcije</th>} */}
              <th scope="col">Akcije</th>
            </tr>
        </thead>
        <tbody>
            {
                boxTypes[productId].info.map((item, index) => (
                    <tr key={index}>
                        <td>{product.label}</td>
                        <td>{item.dimension}</td>
                        {item.prices.map((price, idx) => (<td key={idx}>{price.price ? price.price : ""}RSD</td>))}
                        {/* {isLoggedIn && <td>
                          <ModalDialog modalContent={ showEditForm(item) } title="Izmena cena" buttonActionLabel="Sačuvaj"><BsPencilSquare className="text-primary" /></ModalDialog>
                          <ModalDialog modalContent={ "Da li želite da izbrišete dimenziju?" } title="Brisanje dimenzije" buttonActionLabel="Izbriši"><BsTrashFill className="text-primary" /></ModalDialog>
                        </td>} */}
                        <td>
                          <ModalDialog modalContent={ showEditForm(item) } title="Izmena cena" buttonActionLabel="Sačuvaj" onBtnAction={saveData}><BsPencilSquare className="text-primary" /></ModalDialog>
                          <ModalDialog modalContent={ "Da li želite da izbrišete dimenziju?" } title="Brisanje dimenzije" buttonActionLabel="Izbriši" onBtnAction={onClick => deleteDimension(item, product.id)}><BsTrashFill className="text-primary" /></ModalDialog>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default Table