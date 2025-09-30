import React from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Flipart - Register",
  description: "Create a new account",
};

function register() {
  return (
    <div className="container p-10">
        <div className="mb-3">
            <h5 className='text-center mb-3'> New customer, Please register below:</h5>
            <RegisterForm />
        </div>
        <div className="mt-10 text-center">
          <strong className='text-primary'> Test Credentials for Existing User:</strong><br />
            <span>Username: user</span><br />
            <span>Password: user123</span>
        </div>    
       
        
    </div>
  )
}

export default register;