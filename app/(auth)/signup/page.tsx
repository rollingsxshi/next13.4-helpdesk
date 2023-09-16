"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [formError, setFormError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.SyntheticEvent, email: string, password: string) => {
    e.preventDefault()

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`
      }
    })

    if (error) {
      setFormError(error.message)
    }
    if (!error) {
      router.push('/verify')
    }
  }

  return (
    <main>
      <h2 className="text-center">Sign up</h2>

      <AuthForm handleSubmit={handleSubmit} />
      {formError && (
        <div className="error">{ formError }</div>
      )}
    </main>
  )
}
export default Signup