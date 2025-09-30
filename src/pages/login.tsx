import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Flipart - Login",
  description: "Sign in to your account",
};

function login() {
  return (
    <div className="container">
        <div className="mb-3">
            <h5 className='mb-3 text-center'> Sign In or Create Account </h5>
            <LoginForm />
            <p className='mt-3 text-center'> New Customer ? <a href="/register">Register</a></p>
        </div>
        <div className="mt-10">
          <strong className='text-primary'> Test Credentials: </strong><br />
            <span>Username: admin</span><br />
            <span>Password: admin123</span>
        </div>
    </div>
  )
}

export default login
