import { useState } from 'react'
// import { socket } from '../../utils/socket'

// export const POCEvent = () => {
//     const [tasks, setTasks] = useState([])
//     socket.emit('getGameDetails', { roomId: 1 })
//     socket.on('gameDetails', (data) => {
//         setTasks(data.tasks)
//     })
//     return (
//         <div>
//             <p>POC</p>
//             {tasks.map((task: any) => {
//                 return (
//                     <div>
//                         <p>
//                             {task.name} {task.open ? 'open' : 'closed'}
//                         </p>
//                     </div>
//                 )
//             })}
//         </div>
//     )
// }
