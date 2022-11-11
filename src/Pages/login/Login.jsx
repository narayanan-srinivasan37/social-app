import "./Login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
function Login() {
  const { login } = useContext(AuthContext);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello world.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            molestias quis minima porro voluptas dolores quam, atque reiciendis
            ea a cum! Veniam illo eos amet! Natus ducimus explicabo sint
            necessitatibus!
          </p>
          <span>Don't you have an account</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <Link to='/'>
            <button onClick={()=>login()}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
