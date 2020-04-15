import { Link, routes } from '@redwoodjs/router'

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const RabbitCard = ({ rabbits }) => {
  return (
    <div className="cardList">
      {rabbits.map((rabbit) => (
        <div className="bunnyCard" key="rabbit.id">
          <h3>{rabbit.id}</h3>
          <p>{truncate(rabbit.eartag)}</p>
          <p>{truncate(rabbit.name)}</p>
          <p>{truncate(rabbit.color)}</p>
          <p>{truncate(rabbit.parents)}</p>
          <p>{truncate(rabbit.status)}</p>
          <p>{truncate(rabbit.pending)}</p>
          <p>{truncate(rabbit.price)}</p>
          <p>{truncate(rabbit.picture)}</p>
        </div>
      ))}
    </div>
  )
}

export default RabbitCard
