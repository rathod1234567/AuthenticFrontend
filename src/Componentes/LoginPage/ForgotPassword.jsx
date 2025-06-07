import React, { useState } from 'react'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEmailError('')
    setSuccessMessage('')

    setIsSubmitting(true)
    setTimeout(() => {
      console.log('Reset link sent to:', email)
      setSuccessMessage('Password reset link sent to your email!')
      setIsSubmitting(false)
    }, 1500)
  }

  const handleBackToLogin = () => {
    console.log('Navigate back to login')
    // In your actual app, this would use navigate('/login')
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center text-blue-800">Forgot Password</h2>
        <div onSubmit={handleSubmit}>
          <div className="mb-4 sm:mb-6">
            <label htmlFor="email" className="block text-blue-700 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-blue-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm sm:text-base"
              placeholder="Enter your registered email"
              required
            />
            {emailError && <p className="text-red-500 text-xs sm:text-sm mt-1">{emailError}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 rounded-md hover:bg-blue-700 transition font-semibold text-sm sm:text-base disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          </button>
        </div>

        {successMessage && <p className="text-green-600 text-xs sm:text-sm mt-4 text-center">{successMessage}</p>}

        <button
          onClick={() => handleBackToLogin()}
          className="text-xs sm:text-sm text-blue-600 mt-4 sm:mt-6 hover:underline block mx-auto hover:text-blue-800 transition"
        >
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword