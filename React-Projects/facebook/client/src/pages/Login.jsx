import React, { useState } from 'react'
import './Login.css';
import {QueryClient, useMutation, useQueryClient} from 'react-query'
import {login, registerUser} from '../apis/user';
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [signupInput, setSignup] = useState({
    fname:'',
    lname:'',
    email:'',
    phone_number:'',
    password:'',
    dob:'',
  });
  const [loginInput, setLogin] = useState({
    email:'',
    password:''
  });

const queryClient = useQueryClient()
  const createUserQuery = useMutation({
    mutationFn: registerUser,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['users']})
    }
  });

  const handleLogin = (event) => {
    
    const {name, value} = event.target;
    setLogin({...loginInput, [name]: value})
  }
  const handlesignUp = (event) => {
    const {name, value} = event.target;
    setSignup({...signupInput, [name]: value})
  }

  
  const submitSignUp = (event) =>{
    event.preventDefault();
    createUserQuery.mutate(signupInput);
    if(createUserQuery.isLoading) toast.loading("Loading")
    if(createUserQuery.data?.error) toast.error(createUserQuery.data?.message);
    if(!createUserQuery.data?.error) toast.success(createUserQuery.data?.message);
   
  }

const loginQuery = useMutation({
  mutationFn: login,
  onSuccess: ()=>{
    queryClient.invalidateQueries({queryKey:['users']})
  }
});

const submitLogin = (event)=>{
  event.preventDefault()
  loginQuery.mutate(loginInput);
  
}
 

  return (
    <div className="container pb-5 mb-sm-4">

    <div className="row pt-5">
        <div className="col-md-6 pt-sm-3">
            <div className="card">
                <div className="card-body">
                    <h2 className="h4 mb-1">Sign in</h2>
                    <br/>
                    
                    
                    <form className="needs-validation" noValidate="" onSubmit={submitLogin}>
                        <div className="input-group form-group">
                            <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span></div>
                            <input className="form-control" type="email" placeholder="Email" required=""  name='email' value={submitSignUp.email} onChange={handleLogin}/>
                            <div className="invalid-feedback">Please enter valid email address!</div>
                        </div><br/>
                        <div className="input-group form-group">
                            <div className="input-group-prepend"><span className="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span></div>
                            <input className="form-control" type="password" placeholder="Password" required=""  name='password' value={submitSignUp.password} onChange={handleLogin}/>
                            <div className="invalid-feedback">Please enter valid password!</div>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between">
                            <a className="nav-link-inline font-size-sm" href="account-password-recovery.html">Forgot password?</a>
                        </div>
                       
                        <div className="text-right pt-4">
                            <button className="btn btn-primary" type="submit">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-md-6 pt-5 pt-sm-3">
            <h2 className="h4 mb-3">No account? Sign up</h2>
            <p className="text-muted mb-4">Registration takes less than a minute but gives you full control over your orders.</p>
            <form className="needs-validation" noValidate="" onSubmit={submitSignUp}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="reg-fn">First Name</label>
                            <input className="form-control" type="text" required="" id="reg-fn" name='fname' value={submitSignUp.fname} onChange={handlesignUp}/>
                            <div className="invalid-feedback">Please enter your first name!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="reg-ln">Last Name</label>
                            <input className="form-control" type="text" required="" id="reg-ln" name='lname' value={submitSignUp.lname} onChange={handlesignUp} />
                            <div className="invalid-feedback">Please enter your last name!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="reg-email">E-mail Address</label>
                            <input className="form-control" type="email" required="" id="reg-email" name='email' value={submitSignUp.email} onChange={handlesignUp}/>
                            <div className="invalid-feedback">Please enter valid email address!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="reg-phone">Phone Number</label>
                            <input className="form-control" type="phone" required="" id="reg-phone" name='phone_number' value={submitSignUp.phone_number} onChange={handlesignUp}/>
                            <div className="invalid-feedback">Please enter your phone number!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="reg-password">Password</label>
                            <input className="form-control" type="password" required="" id="reg-password" name='password' value={submitSignUp.password} onChange={handlesignUp}/>
                            <div className="invalid-feedback">Please enter password!</div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="reg-password-confirm">Date Of Birth</label>
                            <input className="form-control" type="date" max="2015-01-01" required="" id="reg-password-confirm" name='dob' value={submitSignUp.dob} onChange={handlesignUp}/>
                            <div className="invalid-feedback">Passwords do not match!</div>
                        </div>
                    </div>
                </div><br/>
                <div className="text-right">
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    
</div>
  )
}
