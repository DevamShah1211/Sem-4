import React from "react";
const handlechange = (event) => {
    console.log(event.target.value)
}
function handle() {
    return (
        <>
            <form onChange={handlechange}>
                <input type="text"></input>
                <button>Click</button>
            </form>
        </>
    )
}
export default handle;