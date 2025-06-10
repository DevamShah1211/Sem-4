import { createContext } from "react";
import C3 from './c3'
const CC2=createContext()
function UC2(){
    return(
        <>
        <CC2.Provider value="Student">
            <C3/>
        </CC2.Provider>
        </>
    )
}
export default UC2
export {CC2}