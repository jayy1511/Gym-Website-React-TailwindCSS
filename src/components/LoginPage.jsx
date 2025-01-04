import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#222] text-white flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="text-lg mt-2">Sign in to access your account</p>
      </div>
      <div className="bg-[#333] p-8 rounded-lg shadow-md w-full max-w-md">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/signup"
          appearance={{
            elements: {
              card: "shadow-lg p-8 rounded-lg bg-white",
              input: "border border-gray-300 rounded-lg px-4 py-2 mb-4",
              button: "bg-brightRed text-white px-4 py-2 rounded-lg",
            },
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
