import "./Register.scss";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Network.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
            molestias quis minima porro voluptas dolores quam, atque reiciendis
            ea a cum! Veniam illo eos amet! Natus ducimus explicabo sint
            necessitatibus!
          </p>
          <span>Do you have an account</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
