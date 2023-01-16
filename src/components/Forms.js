import {types} from '../data/sample.js';

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
                            defaultValue={`${price.price} RSD`}/>
                    </div>
                ))}
        </form>
    );
};

const showNewForm = (row) => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="dimension" className="form-label">Dimenzija</label>
                <input type="text" className="form-control" id="dimension" placeholder="NxM"/>
            </div>
            {row.prices.map((price, index) => (
                    <div className="mb-3" key={index}>
                        <label htmlFor={`${price.type}`} className="form-label">{types[price.type].label}</label>
                        <input
                            type="text"
                            className="form-control"
                            id={`${price.type}`}
                            placeholder="RSD"/>
                    </div>
                ))}
        </form>
    );
};

export {showNewForm, showEditForm};