import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login/css/main.css"
import "./login/css/util.css"

export const Login = () => {
	const navigate = useNavigate()

	const [email,setemail]=useState('')

	const [password,setPassword]=useState('')

	const loginuser= async(e)=>{
		e.preventDefault()

		const res= await fetch('/signin',{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({email,password
			})
		})

		const data=res.json()

		if (res.status === 400 || !data) {
			window.alert("invalid credentials")
		} else {
			window.alert("Login successfull")
			navigate('/home')
		}
	}
	// const login=(e)=>{
	// 	e.preventDefault()
	
	// 	console.log(`email: ${email} \nPassword: ${password}`);
		// alert(`email: ${email}  \nPassword: ${password} `)
	// }
  return (
    <div >
        <div className="limiter ">
		<div className="container-login100  p-t-85 " >
			<div className="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-54">
				<form method='POST' className="login100-form validate-form">
					<span className="login100-form-title p-b-20">
						Login
					</span>

					<div className="wrap-input100 validate-input m-b-15" data-validate = "email is reauired">
						<span className="label-input100">Email</span>
						<input className="input100" type="text" name="email" placeholder="Type your email"
						value={email}
							onChange={(e)=> setemail(e.target.value) }
						/>
						<span className="focus-input100" ></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Password is required">
						<span className="label-input100">Password</span>
						
						<input className="input100" type="password" name="password" placeholder="Type your password"
						value={password}
						onChange={(e)=>setPassword(e.target.value)}
						/>
						<span className="focus-input100" ></span>
					</div>
					
					<div className="text-right p-t-8 p-b-31">
						<Link to="/">
							Forgot password?
						</Link>
					</div>
					
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" name='login' onClick={loginuser}>
								Login
							</button>
						</div>
					</div>

					<div className="txt1 text-center p-t-30 p-b-20">
						<span>
							Or Sign Up Using
						</span>
					</div>

					<div className="flex-c-m">
						<Link to="/" className="login100-social-item bg1">
							<i className="fa fa-facebook"></i>
						</Link>

						<Link to="/" className="login100-social-item bg2">
							<i className="fa fa-twitter"></i>
						</Link>

						<Link to="/" className="login100-social-item bg3">
							<i className="fa fa-google"></i>
						</Link>
					</div>

					<div className="flex-col-c p-t-15">
						<span className="txt1 p-b-17">
							Or Sign Up Using
						</span>

						<Link to="/signup" className="txt2">
							Sign Up
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
  </div>
  )
}
export default Login;