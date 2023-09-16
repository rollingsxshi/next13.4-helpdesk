"use client"

import AuthForm from "../AuthForm";

const Signup = () => {
  const handleSubmit = async (e: React.SyntheticEvent, email: string, password: string) => {
    e.preventDefault()

    console.log('user signup', email, password);
  }

  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
export default Signup