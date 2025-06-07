import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      console.log('Login attempt:', { email, password, rememberMe })
      alert(`Login attempted with email: ${email}`)
      setIsLoading(false)
      // navigate('/home') in actual app
    }, 1000)
  }

  const handleHomeClick = () => {
    console.log('Navigate to home')
    // navigate('/home') in actual app
  }

  const handleForgotPassword = () => {
    console.log('Navigate to forgot password')
    // navigate('/forgot_password') in actual app
  }

  return (
    <>
      <div className="absolute top-4 right-4 z-10 flex gap-2 sm:gap-4">
        <button
          className="hover:bg-blue-700 bg-blue-600 text-white text-sm sm:text-lg lg:text-xl font-medium rounded px-2 sm:px-3 py-1 sm:py-2 transition-colors duration-200 border border-blue-300"
          onClick={handleHomeClick}
        >
          Home
        </button>
      </div>

      <div className="flex items-center justify-center min-h-screen w-full bg-blue-50 px-4 sm:px-6 lg:px-8">
        <div className="border border-blue-300 shadow-xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm lg:max-w-md bg-white rounded-lg">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-1 sm:mb-2 text-blue-800">OM Sheel Group</h1>
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6 text-center text-blue-700">Login Form</h2>

          <div className="mb-3 sm:mb-4 text-left">
            <label htmlFor="email" className="block text-blue-800 text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">Email:</label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white text-blue-900 border border-blue-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-3 sm:mb-4 text-left">
            <label htmlFor="password" className="block text-blue-800 text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">Password:</label>
            <input
              id="password"
              type="password"
              autoComplete="off"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white text-blue-900 border border-blue-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm sm:text-base"
            />
          </div>

          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <label className="inline-flex items-center text-xs sm:text-sm text-blue-700 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600"
              />
              <span className="ml-1 sm:ml-2">Remember me</span>
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-blue-600 text-xs sm:text-sm hover:underline hover:text-blue-800 transition"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-1 sm:py-2 px-4 rounded-md font-medium disabled:opacity-50 hover:bg-blue-700 transition text-sm sm:text-base"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Login