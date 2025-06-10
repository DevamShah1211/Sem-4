import { createContext } from "react";
import C2 from './c2'
const CC1=createContext()
const mycss={backgroundColor:'tomato',color:'cyan',fontsize:'20px'}
function UC1(){
    return(
        <>
        <CC1.Provider value={mycss}>
            <C2/>
        </CC1.Provider>
        </>
    )
}
export default UC1
export {CC1}