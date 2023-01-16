const CardBox = ({img, title}) => {
  return (
    <div>
        <img className="card-img-top" src={img} alt="Card image cap" />
        <div className="card-body">            
            <h5 className="card-title text-dark">{title}</h5>
        </div>
    </div>
  )
}

export default CardBox
