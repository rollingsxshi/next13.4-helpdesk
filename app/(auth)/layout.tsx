import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation"

const AuthLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect('/')
  }

  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href={'/signup'}>Sign up</Link>
        <Link href={'/login'}>Login</Link>
      </nav>
      {children}
    </>
  )
}
export default AuthLayout