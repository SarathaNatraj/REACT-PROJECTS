const EProduct = ({data}) => {

    return (
        <div> 
            <h3>Product info - {data.id}</h3>
            <p> Name : {data.name}</p>
             <p> Name : {data.count}</p>
             <hr/>
        </div>
    )
}
export default EProduct;