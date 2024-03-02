import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard'); // Navigate to '/dashboard' route
  };

  return (
    <>
      <div className='loginback'>
        <div className="ring">
          <i style={{ '--clr': '#00ff0a' }}></i>
          <i style={{ '--clr': '#ff0057' }}></i>
          <i style={{ '--clr': '#fffd44' }}></i>
          <div className="login">
            <h2>Login</h2>
            <div className="inputBx">
              <input type="text" placeholder="Username" />
            </div>
            <div className="inputBx">
              <input type="password" placeholder="Password" />
            </div>
            <div className="inputBx">
              <input type="submit" value="Sign in" />
            </div>
            <div className="links">
              <a href="#"><strong>Forget Password</strong></a>
              <button className='Expore' onClick={handleClick}>Just Explore</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
