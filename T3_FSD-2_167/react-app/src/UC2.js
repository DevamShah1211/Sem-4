import { useContext } from "react";
import { Fname,Lname} from './main'
function UC2(){
    const firstname=useContext(Fname)
    const lastname=useContext(Lname)
    return(
        <>
        <h1>Welcom {firstname} {lastname}</h1>
        </>
    )
}
export default UC2