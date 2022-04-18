import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login/css/main.css"
import "./login/css/util.css"

export const Signup = () => {
	const navigate = useNavigate()

	const [user, setUser] = useState({
		name:"",email:"",phone:"",work:"",password:"",cpassword:""
	})

	let name, value;

	const handleInputs = (e) => {
		console.log(e);
		name = e.target.name;
		value = e.target.value;

		setUser({ ...user, [name]: value });
	}

	const PostData = async (e) => {
		e.preventDefault();

		const {name,email,phone,work,password,cpassword} = user;

		const res = await fetch("/register", {
			method: "POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({name,email,phone,work,password,cpassword
			})
		})
		const data = await res.json()
		if (data.status === 422 || !res) {
			window.alert("invalid registration")
			console.log("invalid registration");
		}
		else {
			window.alert("registration successfull")
			console.log("registration successfull");

			navigate("/login")
		}
	}


	// const [name,setName]=useState('')
	// const [email,setEmail]=useState('')
	// const [phone,setPhone]=useState('')
	// const [profession,setProfession]=useState('')
	// const [password,setPassword]=useState('')
	// const [cpassword,setCpassword]=useState('')

	// const NameHandler=(e)=>{
	// 	setName(e.target.value)
	// }
	// const EmailHandler=(e)=>{
	// 	setEmail(e.target.value)
	// }
	// const PhoneHandler=(e)=>{
	// 	setPhone(e.target.value)
	// }
	// const ProfessionHandler=(e)=>{
	// 	setProfession(e.target.value)
	// }
	// const PasswordHandler=(e)=>{
	// 	setPassword(e.target.value)
	// }
	// const CpasswordHandler=(e)=>{
	// 	setCpassword(e.target.value)
	// }
	// const signup=(e)=>{
	// 	e.preventDefault()

	// 	alert(`Name: ${name} \nEmail: ${email} \nPhone: ${phone} \nProfession: ${profession} \nPassword: ${password} `)
	// }


	return (

		<div >
			<div className="limiter">
				<div className="container-login100 p-t-85" >
					<div className="wrap-login100 p-l-55 p-r-55 p-t-20 p-b-54">
						<form method="POST" className="login100-form validate-form">
							<span className="login100-form-title p-b-20">
								Signup
							</span>

							<div className="wrap-input100 validate-input m-b-15" data-validate="Username is reauired">
								<span className="label-input100">Username</span>
								
								<input className="input100" type="text" name="name"  placeholder="Enter your username"
									value={user.name}
									onChange={handleInputs}

								// onChange={(e)=>{NameHandler(e)}}
								/>
								<span className="focus-input100" data-symbol="&#xf206;"></span>

							</div>

							<div className="wrap-input100 validate-input m-b-23" data-validate="email is reauired">
								<span className="label-input100">Email</span>
								<input className="input100" type="email" name="email" placeholder="Enter your email"
									value={user.email}
									onChange={handleInputs}

								// onChange={(e)=>{EmailHandler(e)}}
								/>
								<span className="focus-input100" data-symbol="&#x2709;"></span>
							</div>

							<div className="wrap-input100 validate-input m-b-23" data-validate="phone no. is reauired">
								<span className="label-input100">Phone</span>
								<input className="input100" type="text" name="phone" placeholder="Enter your phone number"
									value={user.phone}
									onChange={handleInputs}

								// onChange={(e)=>{PhoneHandler(e)}}
								/>
								<span className="focus-input100"data-symbol="&#x260F;" ></span>
							</div>

							<div className="wrap-input100 validate-input m-b-23" data-validate="profession is reauired">
								<span className="label-input100">Profession</span>
								<input className="input100" type="text" name="work" placeholder="Enter your profession"
									value={user.work}
									onChange={handleInputs}

								// onChange={(e)=>{ProfessionHandler(e)}}
								/>
								<span className="focus-input100"data-symbol="&#x270E;" ></span>
							</div>

							<div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
								<span className="label-input100">Password</span>
								<input className="input100" type="password" name="password" placeholder="Enter your password"
									value={user.password}
									onChange={handleInputs}

								// onChange={(e)=>{PasswordHandler(e)}}
								/>
								<span className="focus-input100"data-symbol="&#xf190;" ></span>
							</div>

							<div className="wrap-input100 validate-input m-b-23" data-validate="Password is required">
								<span className="label-input100">Conform Password</span>
								<input className="input100" type="password" name="cpassword" placeholder="Confrom your password"
									value={user.cpassword}
									onChange={handleInputs}

								// onChange={(e)=>{CpasswordHandler(e)}}

								/>
								<span className="focus-input100" data-symbol="&#xf190;"></span>
							</div>

							<div className="text-right p-t-8 p-b-11">

							</div>

							<div className="container-login100-form-btn">
								<div className="wrap-login100-form-btn">
									<div className="login100-form-bgbtn"></div>
									<button className="login100-form-btn" name='signup'
										onClick={PostData}>
										Register
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
									Alredy Registration
								</span>

								<Link to="/login" className="txt2">
									Login
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
export default Signup