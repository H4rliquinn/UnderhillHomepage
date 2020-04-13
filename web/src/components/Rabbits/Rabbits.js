import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_POST_MUTATION = gql`
  mutation DeleteRabbitMutation($id: Int!) {
    deleteRabbit(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const RabbitsList = ({ rabbits }) => {
  const [deleteRabbit] = useMutation(DELETE_POST_MUTATION, {
    onCompleted: () => {
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete rabbit ' + id + '?')) {
      deleteRabbit({ variables: { id } })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">id</th>
            <th className="font-semibold text-left p-3">eartag</th>
            <th className="font-semibold text-left p-3">name</th>
            <th className="font-semibold text-left p-3">color</th>
            <th className="font-semibold text-left p-3">parents</th>
            <th className="font-semibold text-left p-3">status</th>
            <th className="font-semibold text-left p-3">price</th>
            <th className="font-semibold text-left p-3">picture</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {rabbits.map((rabbit) => (
            <tr
              key={rabbit.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(rabbit.id)}</td>
              <td className="p-3">{truncate(rabbit.eartag)}</td>
              <td className="p-3">{truncate(rabbit.name)}</td>
              <td className="p-3">{truncate(rabbit.color)}</td>
              <td className="p-3">{truncate(rabbit.parents)}</td>
              <td className="p-3">{truncate(rabbit.status)}</td>
              <td className="p-3">{truncate(rabbit.price)}</td>
              <td className="p-3">{truncate(rabbit.picture)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.rabbit({ id: rabbit.id })}
                        title={'Show rabbit ' + rabbit.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                    <li className="inline-block">
                      <Link
                        to={routes.editRabbit({ id: rabbit.id })}
                        title={'Edit rabbit ' + rabbit.id}
                        className="text-xs bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Edit
                      </Link>
                    </li>
                    <li className="inline-block">
                      <a
                        href="#"
                        title={'Delete rabbit ' + rabbit.id}
                        className="text-xs bg-gray-100 text-red-600 hover:bg-red-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                        onClick={() => onDeleteClick(rabbit.id)}
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RabbitsList
