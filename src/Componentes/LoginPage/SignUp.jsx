import React, { useState } from 'react'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      setIsLoading(false)
      return
    }

    setTimeout(() => {
      console.log('SignUp attempt:', { username, email, password })
      alert(`Signed up with email: ${email}`)
      setIsLoading(false)
      // navigate('/login') in actual app
    }, 1000)
  }

  const handleLogin = () => {
    console.log('Navigate to login')
    // navigate('/login') in actual app
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="border border-blue-300 shadow-xl p-4 sm:p-6 lg:p-8 w-full max-w-xs sm:max-w-sm lg:max-w-md bg-white rounded-lg">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-1 sm:mb-2 text-blue-800">OM Sheel Group</h1>

        <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-4 sm:mb-6 text-center text-blue-700">
          SignUp
        </h2>

        <div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="username" className="block text-blue-800 text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white text-blue-900 border border-blue-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm sm:text-base"
              required
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="email" className="block text-blue-800 text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white text-blue-900 border border-blue-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm sm:text-base"
              required
            />
          </div>

          <div className="mb-3 sm:mb-4">
            <label htmlFor="password" className="block text-blue-800 text-sm sm:text-base lg:text-lg font-medium mb-1 sm:mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-2 sm:px-3 py-1 sm:py-2 bg-white text-blue-900 border border-blue-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm sm:text-base"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-1 sm:py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200 font-medium text-sm sm:text-base disabled:opacity-50"
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>

        <div className="text-center mt-3 sm:mt-4">
          <button
            type="button"
            onClick={handleLogin}
            className="text-blue-600 bg-none text-xs sm:text-sm hover:underline hover:text-blue-800 transition-colors duration-200"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
  