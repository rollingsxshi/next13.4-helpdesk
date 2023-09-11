import Link from "next/link"

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
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