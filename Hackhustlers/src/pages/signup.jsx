import Navbar from "../components/navbar";
import "./signup.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup=()=>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return(
        <>
        <Navbar/>
        <div className="main">
            <div className="login_box">
            <h2 style={{ fontFamily: "Lucida Handwriting" }}>SIGNUP</h2>

               <form onSubmit={handlesubmit}>
               <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ fontFamily: "Lucida Handwriting",display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                           Name
                          </label>
                  <input
                   type="text"
                   placeholder="Enter Name"
                   autoComplete="off"
                   name="name"
                  style={{
                      width: '90%',
                      padding: '10px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      fontFamily: "Lucida Handwriting",
                       boxSizing: 'border-box',
                      
                       }}
                     onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3" style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{  fontFamily: "Lucida Handwriting",display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                  Email
              </label>
              <input
                    type="email"
                    placeholder="Enter Email"
                    autoComplete="off"
                    name="email"
                 style={{
                    width: '90%',
                    padding: '10px',
                   borderRadius: '4px',
                   border: '1px solid #ccc',
                   fontFamily: "Lucida Handwriting",
                   boxSizing: 'border-box',
                   }}
                 onChange={(e) => setEmail(e.target.value)}
             />
            </div>
        <div className="mb-3" style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ fontFamily: "Lucida Handwriting", display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
               Password
             </label>
             <input
               type="password"
               placeholder="Enter Password"
               name="password"
               style={{
                   width: '90%',
                   padding: '10px',
                   borderRadius: '4px',
                   fontFamily: "Lucida Handwriting",
                   border: '1px solid #ccc',
                   boxSizing: 'border-box',
               }}
               onChange={(e) => setPassword(e.target.value)}
           />
           </div>
           <div className="mb-3" style={{ marginBottom: '15px' }}>
              <label htmlFor="confirmPassword" style={{  fontFamily: "Lucida Handwriting",display: 'block', marginBottom: '5px', fontWeight:           'bold' }}>
                  Confirm Password
              </label>
              <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  style={{
                      width: '90%',
                      padding: '10px',
                      borderRadius: '4px', 
                      fontFamily: "Lucida Handwriting",
                      border: '1px solid #ccc',
                      boxSizing: 'border-box',
                  }}
                  onChange={(e) => setConfirmPassword(e.target.value)}
              />
          </div>
            {error && <p style={{ color: 'red', marginBottom: '15px' }}>{error}</p>}
            <form onSubmit={handlesubmit}>
    <button
        type="submit"
        className="btn_grad"
        style={{
            width: '90%',
            padding: '10px',
            fontFamily: "Lucida Handwriting",
            backgroundColor: '#FF5733 ',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
        }}
    >
        Register
    </button>
            </form>
            <p style={{ fontFamily: "Lucida Handwriting", marginTop: '15px' }}>Already Have an Account</p>
            <Link
                to="/login"
                style={{
                    display: 'inline-block',
                    width: '80%',
                    padding: '10px',
                    fontFamily: "Lucida Handwriting",
                    backgroundColor: '#F3E9D2',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    textDecoration: 'none',
                    color: 'black',
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
            >
                Login
            </Link>



               </form>
            </div>
        </div>
        </>
    )
}
  export default Signup;