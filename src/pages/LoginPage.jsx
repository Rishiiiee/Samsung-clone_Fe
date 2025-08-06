import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (isLogin) { 
        const response = await axios.get('https://samsung-clone-be.onrender.com/auth');
        const users = response.data;
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
          setSuccess('Login successful!');
          setIsLoggedIn(true);
          setCurrentUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          navigate('/');
        } else {
          setError('Invalid email or password');
        }
      } else {
        const checkResponse = await axios.get('https://samsung-clone-be.onrender.com/auth');
        const existingUser = checkResponse.data.find(u => u.email === email);
        
        if (existingUser) {
          setError('Email already registered');
          return;
        }
        
        const newUser = { email, password };
        const registerResponse = await axios.post('https://samsung-clone-be.onrender.com/auth', newUser);
        setSuccess('Registration successful! Please login.');
        setIsLogin(true);
        setEmail('');
        setPassword('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Authentication error:', err);
    }
  };

  //logout wala part 
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('user');
    setSuccess('You have been logged out successfully.');
  };

  
  if (isLoggedIn && currentUser) {
    return (
      <div className="auth-container">
        <h2>Welcome back!</h2>
        <div className="success-message">
          You are already logged in as {currentUser.email}
        </div>
        <div className="auth-actions">
          <button 
            onClick={() => navigate('/')}
            className="auth-button"
          >
            Go to Home
          </button>
          <button 
            onClick={handleLogout}
            className="auth-button logout-button"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit" className="auth-button">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      
      <div className="auth-toggle">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <button onClick={() => setIsLogin(false)}>Register</button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button onClick={() => setIsLogin(true)}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;