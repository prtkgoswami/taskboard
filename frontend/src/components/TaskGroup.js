import {React, useState} from 'react'
import Task from './Task'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faPen, faPlus} from '@fortawesome/free-solid-svg-icons'
import TaskForm from './TaskForm'
import QueryUtilities from './QueryUtilities';

function TaskGroup({taskgroup, labels, handleGroupDelete}) {
    const [isEditable, enableEdit] = useState(false);
    const [tasks, setTasks] = useState(taskgroup.tasks);
    const [addTask, showTaskInput] = useState(false);

    function UpdateTaskGroupName() {
        // pass
    }

    function DeleteTaskGroup() {
        // pass
    }

    function CreateTask(title, description) {
        showTaskInput(false)
        var newLabelId = "";
        for (var i = 0; i < labels.length; i++) {
            const item = labels[i]
            if (item.title === "new") {
                newLabelId = item.id
                break
            }
        }

        QueryUtilities.sendQuery(QueryUtilities.createTask(taskgroup.id, title, description, [newLabelId]))
        .then(response => {
            console.log(response)
            setTasks(prevData => [...prevData, response.data.data.createTask])
        })
    }

    function GetTasksbyGroup() {
        QueryUtilities.sendQuery(QueryUtilities.getAllTasksByTaskGroup(taskgroup.id))
        .then(response => {
            console.log(response)
            setTasks(response.data.data.getAllTasksByTaskGroup)
        })
    }

    function DeleteTask(task_id) {
        QueryUtilities.sendQuery(QueryUtilities.deleteTask(taskgroup.id, task_id))
        .then(response => {
            GetTasksbyGroup()
        })
    }

    return (
        <>
            <div id={taskgroup.id} className="taskgroup-card w-full md:w-1/2 lg:w-1/4" draggable="true">
                <div className="taskgroup-card-body p-2 pb-4 bg-gray-800 dark:bg-gray-400 cursor-pointer m-1 border border-transparent rounded-lg  shadow-2xl">
                    <div className="title-bar border-b border-gray-50 dark:border-gray-800 mb-2 py-1 flex flex-row justify-between">
                        <input type="text" className="title-text disabled:bg-transparent text-lg text-left text-gray-800 disabled:text-gray-50 dark:text-gray-800 disabled:text-white" 
                                defaultValue={taskgroup.title} disabled={!isEditable}/>
                        <div className="button-group flex flex-row">
                            <div className="px-2 mx-1 rounded-sm hover:bg-blue-500 hover:bg-opacity-70 transition-all duration-500" onClick={() => {enableEdit(!isEditable)}} title="Edit taskgroup Name">
                                <FontAwesomeIcon icon={faPen} className="text-gray-50 dark:text-gray-800"/>
                            </div>
                            <div className="px-2 mx-1 rounded-sm hover:bg-green-500 hover:bg-opacity-70 transition-all duration-500" title="Add New Task">
                                <FontAwesomeIcon icon={faPlus} className="text-gray-50 dark:text-gray-800"/>
                            </div>
                            <div className="px-2 mx-1 rounded-sm hover:bg-red-600 hover:bg-opacity-70 transition-all duration-500" title="Delete taskgroup" onClick={handleGroupDelete}>
                                <FontAwesomeIcon icon={faTimes} className="text-gray-50 dark:text-gray-800"/>
                            </div>
                        </div>
                    </div>
                    <div className={`task-container flex flex-col max-h-60 px-2 py-1 ${tasks.length > 0 && "overflow-y-scroll"}`}>
                        {
                            tasks.length > 0 && tasks.map((task, index) => (
                                <Task key={task.id} task={task} handleDelete={() => DeleteTask(task.id)}/>
                            ))
                        }
                    </div>

                    <div className="new-task bg-gray-50 dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-100 dark:text-gray-50 dark:hover:bg-opacity-90 hover:bg-opacity-70 border border-transparent rounded-md p-2 mx-2 mt-1 my-1" onClick={() => {showTaskInput(true)}}>
                        <p className="text-center">New Task</p>
                    </div>
                </div>
            </div>
        
        

            {
                addTask && 
                <TaskForm taskGroupId={taskgroup.id} task={undefined} handleTaskCreation={(title, description) => CreateTask(title, description)} hidePanel={() => showTaskInput(false)}/>
            }
        </>
    )
}

export default TaskGroup
