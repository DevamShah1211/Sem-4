import m1 from './m1.png'
import m2 from './m2.png'
import m3 from './m3.png'
// import Task3 from "./Taks-3"
// import './App.css';
function Product(props){
    return(
        <>
        <div style={{display:'flex'}}>
        {
            props.data.map((value) =>{return <> <img src={value.img}></img><h1>{value.Name}</h1></>})
        }
        </div>
        </>
    )
}
export default Product;