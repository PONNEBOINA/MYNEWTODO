import {useState} from "react"
import Cookies from "js-cookie"
import {Link,  useNavigate } from "react-router-dom";
import "./index.css"

const SignIn = ()=>{

    const [email,setEmail]  = useState("")
    const [password,setPassword]  = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()

   const handleForm  = async (e)=>{
    e.preventDefault()
    try{  
        const api = "https://mytodo-backend-69lo.onrender.com/api/login"
        const option = {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({email,password})
        }
        const response = await fetch(api,option)
        const data = await response.json()
        if(!response.ok){
            setError(data.msg || "Login failed");
            return;
        }
        Cookies.set("token",data.token,{expires:1})
        setError("")
        navigate("/Home")
    
    }catch (err) {
      console.error(err);
      setError("Something went wrong");
    }

}
   
    return(
        <div className="container">
        <form onSubmit={handleForm} className="form-container">
            <h1>SIGN IN</h1>
            <label htmlFor="email" className="label">EMAIL:</label>
            <input className="input" type="email" id="email" placeholder="Enter Your email" onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="pass" className="pass" >PASSWORD:</label>
            <input className="input" type="password" id="pass" placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} />
            <div>

                <button type="submit" className="signinbutton">SIGN IN</button>
                
              <div>
              <p>
              {setError && <p>{error}</p>}
              </p>

              <p>Don't have an account?<Link to="/signup" className="signupbutton">SignUp</Link> </p>
              </div>
            </div>
           
        </form>
        </div>
    )
}


export default SignIn