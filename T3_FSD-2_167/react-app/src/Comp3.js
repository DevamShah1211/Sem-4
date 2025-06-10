import { useContext } from "react";
import { Num1,Num2} from './Comp'
function Comp3(){
    const Number1=useContext(Num1)
    const Number2=useContext(Num2)
    return(
        <>
        <h1>{Number1}X{Number2}={Number1*Number2}</h1>
        </>
    )
}
export default Comp3
