import { useState } from "react";
import axios from "axios";
function Signup() {
  const [username, setusername] = useState("");
  const hs = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", { username });
      alert("user registered " + username);
      setusername(" ");
    } catch (err) {
      alert("error");
    }
  };
  return (
    <>
      <form onSubmit={hs} method="post">
        username:
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setusername(e.target.value);
          }}
        ></input>
        <button type="submit">register</button>
      </form>
    </>
  );
}
export default Signup;
