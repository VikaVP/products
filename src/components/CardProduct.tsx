/* eslint-disable @typescript-eslint/no-explicit-any */
const CardProduct = (data: any) => {
    return <div className="card card-product">
            <div className="card-header">
                {data.data.price}
            </div>
            <div className='img-card'>
                <img src={data.data.image}/>
            </div>
            <div className="card-body">
                <h3>
                    {data.data.name}
                </h3>
                <p>
                    {data.data.description}
                </p>
                <h4>
                    {data.data.discount}
                </h4>   
            </div>
        </div>
}

export default CardProduct