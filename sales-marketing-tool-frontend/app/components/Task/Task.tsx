import { FaTimes } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";


interface TaskProp {
    task: {id: number, name: string, description: string}
    onDelete: (id: number) => void;
    onEdit: (id: number) => void;
}

const Task = ({task,onDelete,onEdit} : TaskProp) => {
  return (
    <div className="bg-green-100 p-3 rounded">
      <h1 className="font-bold">
        {task.name}
        <span className="float-right flex">
        <FaRegEdit
        onClick={()=>onEdit(task.id)}
        style={{ color: "steelblue", cursor: "pointer" }}/>
        <FaTimes 
            onClick={()=>onDelete(task.id)}
            style={{ color: "red", cursor: "pointer" }}
            className="float-right"
            />
        </span>

      </h1>
      <p>{task.description}</p>
    </div>
  )
}
export default Task