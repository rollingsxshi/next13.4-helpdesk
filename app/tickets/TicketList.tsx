import Link from "next/link"

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 30
    }
  })
  return res.json()
}

interface Ticket {
  id: string
  title: string
  body: string
  priority: string
  user_email: string
}

const TicketList = async () => {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((t: Ticket) => (
        <div key={t.id} className="card my-5">
          <Link href={`/tickets/${t.id}`}>
            <h3>{ t.title }</h3>
            <p>{ t.body.slice(0, 200) }...</p>
            <div className={`pill ${t.priority}`}>
              { t.priority } priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && (
        <p className="text-center">
          There are no open tickets, yay!
        </p>
      )}
    </>
  )
}
export default TicketList