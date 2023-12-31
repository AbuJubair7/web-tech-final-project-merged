import { FC } from 'react';
import Task from './Task'

interface TaskProp {
    tasks: {id: number, name: string, description: string}[]
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const Tasks = ({tasks,onDelete,onEdit}: TaskProp) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </>
  )
}
export default Tasks