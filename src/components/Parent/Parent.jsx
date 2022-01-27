import Demo from "../Demo/Demo";
import Child from "../Demo/Child";
import Product from "../Demo/Product";

const Parent=()=>{
    return(
        <>
            <Demo>
                <Child/>
                <Product/>
            </Demo>
        </>
    );
}

export default Parent;