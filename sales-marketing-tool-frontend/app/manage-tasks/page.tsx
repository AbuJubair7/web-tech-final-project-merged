"use client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from 'react';
import Tasks from "../components/Task/Tasks";
import AddTask from "../components/Task/AddTask";
import axios from "axios";

interface Task {
  id: number;
  name: string;
  description: string;
}

const ManageTasks = () => {
  const baseURL = "http://localhost:8888/task-management";
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [buttonColor, setButtonColor] = useState(true);
  const [taskToEdit, setTaskToEdit] = useState<Task | undefined>()
    
    // const data = await res.json()
    useEffect(() => {
      const renderTasks = async () => {
        axios.get(baseURL).then((response) => {
          setTasks(response.data);
        });
      }
      renderTasks();
    },[]);
  
    const [buttonStyle, setButtonStyle] = useState({
      color: "success",
      text: "Add",
    });
    
    const toggleForm = () => {
      setShowForm(!showForm);
      setButtonColor(!buttonColor);
      setButtonStyle((prevStyle) => ({
        ...prevStyle,
        text: showForm ? "Add" : "Cancel",
      }));
      setTaskToEdit(undefined);
    };
 
    const addTask = async (newTask: Task) => {
        if(tasks.find((task) => task.id === newTask.id)) {
            setTasks(tasks.map((task) => task.id === newTask.id ? newTask : task));    
        }else
        {
            setTasks([...tasks, newTask]);
        }
        toggleForm();
    };

    const deleteTask = async (id: number) => {
        axios
        .delete(`${baseURL}/${id}`)
        .then(() => {
          alert("Post deleted!");
          setTasks(tasks.filter((task) => task.id !== id));
        });
    }

    const getEditTaskId = async (id: number) => {
        if(!showForm)
        toggleForm()
        
    setTaskToEdit(tasks.find((task) => task.id === id))
    
    }
    

  return (
    <div className="flex justify-center ">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        className="border-2 rounded border-green-300 mt-3"
      >
        <Stack spacing={2}>
          <h1 className="font-bold text-4xl text-center">Task Manager</h1>

          <Grid container justifyContent="flex-end">
            <Button
                color={buttonColor ? "success" : "warning"}
                variant="contained"
                style={{ width: 120 }}
                onClick={toggleForm}
            >
                {buttonStyle.text}
            </Button>
          </Grid>

          {showForm && (
            <AddTask onAdd={addTask} taskToEdit={taskToEdit} />
          )}

          {tasks.length > 0 ? (
          <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onEdit={getEditTaskId}
          />): <p className="font-semibold text-center">No tasks to show</p>}

        </Stack>
      </Box>
    </div>
  );
};
export default ManageTasks;
