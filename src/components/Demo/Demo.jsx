import Child from "./Child";
import Product from "./Product";
import People from "./People";
const Demo = (props) => {
    console.log('props: ');
    console.log(props);
    const product = props.children.find(({ type }) => type === People);
    console.log(product);
    return (
        <>
            <div>
                Demo component

            </div>

        </>
    );
};

export default Demo;
