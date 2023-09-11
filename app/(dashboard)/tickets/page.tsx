import { Suspense } from "react"
import type { Metadata } from 'next'

import TicketList from "./TicketList"
import Loading from "../loading"

export const metadata: Metadata = {
  title: 'Dojo Helpdesk | Tickets',
}

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}
export default Tickets