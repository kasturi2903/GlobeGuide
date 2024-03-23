import Navbar from "../components/navbar";
import "./signup.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{email,password})
        .then(result=>{ 
            console.log(result)
            if(result.data=="success"){
                navigate('/home')
            }
       
        })
        .catch(err=> console.log(err))
    }


    return(
        <>
        <Navbar/>
        <div className="main">
            <div  style={{height:'380px'}}className="login_box">
            <h2 style={{ fontFamily: "Lucida Handwriting" }}>Login</h2>

               <form onSubmit={handlesubmit}>
               
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
        Login
    </button>
            </form>
            <p style={{ fontFamily: "Lucida Handwriting", marginTop: '15px' }}>Not Have an Account</p>
            <Link
                to="/signup"
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
                Signup
            </Link>



               </form>
            </div>
        </div>
        </>
    )
}
  export default Login;