import Product from "./product";
import ProductC from "../class/productclass";
const ProductDetails = () => {
    return(
        <div>
             <Product name="Laptop" count="10"/>
      <Product name="Mobiles" count="20"/>
      <Product name="Desktop" count="30"/>
      <ProductC name="Pencils" count="5" />
       <ProductC name="Pens" count="3" />
        </div>
    )

}
export default ProductDetails;