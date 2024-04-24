import { createContext, useContext, useState } from "react";
import {createTasksRequest, getTasksRequest, deleteTasksRequest, getTaskRequest, updateTasksRequest} from '../api/tasks'

const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error("usetasks debe usarse dentro de un proveedor de tareas")
    }
    return context;
} 

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {


        const res = await getTasksRequest()
        setTasks(res.data)
        } catch (error) {
        console.error(error);
        }
        }

    const createTask = async (task) => {
        const res = await createTasksRequest(task) 
        console.log(res)
    }

    const deleteTask = async (id) => {
        try {
            const res = await deleteTasksRequest(id);
            if (res.status === 204) setTasks(tasks.filter(task => task._id !== id))


        } catch (error) {
            console.log(error)
        }
    }

    const getTask = async  (id) => {
        try {
            
        const res = await getTaskRequest(id)
        return res.data
        } catch (error) {
        console.error(error);    
        }
    }

    const updateTask = async (id, task) => {
        try {
        const res = await updateTasksRequest(id, task); 
        console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <TaskContext.Provider 
            value={{
                tasks,
                createTask,
                getTasks,
                deleteTask,
                getTask,
                updateTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}