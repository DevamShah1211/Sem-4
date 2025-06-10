import { useContext } from "react";
import {CC1} from './c1'
import {CC2} from './c2'
function UC3(){
    const mycss=useContext(CC1)
    const data=useContext(CC2)
    return(
        <>
        <h1 style={mycss}>Hello {data}</h1>
        </>
    )
}
export default UC3