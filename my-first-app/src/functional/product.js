const Product = (props) => {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Count : {props.count}</p>
            <hr/>
        </div>
    )
}
export default Product;