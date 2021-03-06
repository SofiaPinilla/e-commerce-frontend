import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <nav>
      <span>header</span>
      <span>
            <Link to="/">
             Home
            </Link>
          </span>
      <div>
        {user ? (
          <span>
            <Link to="/login" onClick={onLogout}>
              Logout
            </Link>
          </span>
        ) : (
          <>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <Link to="/register">Register</Link>
            </span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;