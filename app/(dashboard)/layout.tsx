import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from 'next/headers'

// components
import Navbar from "../components/Navbar"

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return (
    <>
      <Navbar user={data.session?.user} />
      {children}
    </>
  )
}
export default DashboardLayout