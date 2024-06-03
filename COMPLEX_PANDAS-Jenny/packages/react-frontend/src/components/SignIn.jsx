// src/components/SignIn.jsx
import { useCallback } from 'react';
import styles from './login.module.css'; // Import the CSS module

const SignIn = () => {
  const onRectangle2Click = useCallback(() => {
    // Handle click event
  }, []);

  const onSignUpTextClick = useCallback(() => {
    // Handle click event
  }, []);

  return (
    <div className={styles.loginPage}>
      <b className={styles.pandaTodo}>PANDA TODO</b>
      <div className={styles.loginPageChild} />
      <img className={styles.loginPageItem} alt="" src="/src/assets/rectangle-25.svg" />
      <img
        className={styles.loginPageInner}
        alt=""
        src="/src/assets/rectangle-26.svg"
        onClick={onRectangle2Click}
      />
      <b className={styles.signIn}>Sign In</b>
      <img className={styles.rectangleIcon} alt="" src="/src/assets/rectangle-27.svg" />
      <img
        className={styles.loginPageChild1}
        alt=""
        src="/src/assets/rectangle-27.svg"
      />
      <div className={styles.username}>Username:</div>
      <b className={styles.logIn}>Log in</b>
      <div className={styles.password}>Password:</div>
      <div className={styles.logIn1}>LOG IN</div>
      <div className={styles.signUp} onClick={onSignUpTextClick}>
        Sign up
      </div>
      <div className={styles.dontHaveAn}>{`Don’t have an account? `}</div>
      <img
        className={styles.screenshot20240524At305}
        alt=""
        src="/src/assets/screenshot-20240524-at-305-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At310}
        alt=""
        src="/src/assets/screenshot-20240524-at-310-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At308}
        alt=""
        src="/src/assets/screenshot-20240524-at-308-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At3101}
        alt=""
        src="/src/assets/screenshot-20240524-at-310-2@2x.png"
      />
      <img
        className={styles.screenshot20240524At255}
        alt=""
        src="/src/assets/screenshot-20240524-at-255-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At309}
        alt=""
        src="/src/assets/screenshot-20240524-at-309-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At313}
        alt=""
        src="/src/assets/screenshot-20240524-at-313-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At257}
        alt=""
        src="/src/assets/screenshot-20240524-at-257-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At311}
        alt=""
        src="/src/assets/screenshot-20240524-at-311-1@2x.png"
      />
      <img
        className={styles.screenshot20240524At315}
        alt=""
        src="/src/assets/screenshot-20240524-at-315-1@2x.png"
      />
    </div>
  );
};

export default SignIn;


/*
function SignIn() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState("");  // State to hold error messages
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");  // Clear previous errors
        try {
            const response = await axios.post('http://localhost:8000/auth/signin', formData);
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            const errorMessage = error.response ? error.response.data.error : "An error occurred while signing in.";
            setError(errorMessage);
        }
    };

    return (
        <div className="signin-container">
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                {error && <div className="error-message">{error}</div>}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign In</button>
                <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default SignIn;
*/
