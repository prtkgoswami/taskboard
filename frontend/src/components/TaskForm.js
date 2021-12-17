import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

function TaskForm({taskGroupId, task, handleTaskCreation, hidePanel}) {
    
    function CreateTask(e) {
        e.preventDefault()
        const nameInput = document.querySelector('#task-name')
        const descInput = document.querySelector('#task-desc')
        const taskName = nameInput.value
        const taskDesc = descInput.value
        nameInput.value = ""
        descInput.value = ""
        handleTaskCreation(taskName, taskDesc)
    }

    return (
        <div className="absolute left-0 right-0 flex justify-center z-10">
            <div className=" w-1/2 top-32">
                <div className="flex flex-col pt-2 pb-10 bg-gray-100 shadow-2xl">
                    <div className="flex flex-row justify-end px-2">
                        <div className="px-3 py-1 bg-red-600 transition-all duration-300 hover:bg-red-700 text-white cursor-pointer" onClick={hidePanel}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>
                    </div>
                    <form id="task-form" action="" className="flex flex-col text-center px-10" onSubmit={(e) => {CreateTask(e)}}>
                        <input type="text" name="" id="task-name" placeholder="Task Name..." className="m-2 bg-transparent focus:outline-none text-gray-800 border-b-2 border-gray-800 text-md p-2"/>
                        <textarea rows="4" cols="50" id="task-desc" className="resize-none text-md p-2 bg-transparent border-2 border-gray-800 rounded-lg focus:outline-none m-2" placeholder="Comments..."/>
                        <div className="labels-container border-2 border-gray-800 rounded-lg p-3 flex flex-col m-2">
                        <div className="selected-labels border-b-2 border-gray-300 p-2 flex flex-col">
                            <p className="text-left text-md font-mono text-gray-500 uppercase mb-2 underline">Selected:</p>
                            <div className="flex flex-row justify-start">
                            <div className="label-check cursor-pointer rounded-md inline-block shadow-lg px-4 py-1">
                                Label
                            </div>
                            </div>
                        </div>
                        <div className="unselected-labels p-2 flex flex-col">
                            <p className="text-left text-md font-mono text-gray-500 uppercase mb-2 underline">Other Labels:</p>
                            <div className="flex flex-row justify-start">
                            <div className="label-check cursor-pointer rounded-md inline-block shadow-lg px-4 py-1" >
                                Label
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <input type="submit" name="createTask" value="Save Task" id="" className="w-1/2 m-2 p-2 border-2 border-gray-800 bg-transparent text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TaskForm
