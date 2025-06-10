import React from "react";
const handlesubmit = (e) => {
    e.preventDefault()
    alert('Welcome To University')
}
function handle() {
    return (
        <>
            <form onSubmit={handlesubmit}>
                <imput type="text"></imput>
                <input type="password"></input>
                <button>Click</button>
            </form>
        </>
    )
}
export default handle;