//create a one main file named main.js  and other 2 component files UC1 and UC2 pass
//first name and last name from main.js to UC2.js  and display msg in browser welcome fname and lname
import { createContext } from "react";
import UC1 from './UC1'
const Fname=createContext()
const Lname=createContext()
function Main(){
    return(
        <>
        <Fname.Provider value="Devam">
        <Lname.Provider value="Shah">
        <UC1/>
        </Lname.Provider>
        </Fname.Provider>
        </>
    )
}
export default Main
export {Fname,Lname}