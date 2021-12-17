import {React, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faPen} from '@fortawesome/free-solid-svg-icons'

function Task({task, handleDelete}) {
    return (
        <div id={task.id} className="task-card flex flex-col justify-between bg-gray-50 border rounded-md p-2 my-1" draggable="true">
            <p className="text-left">{task.title}</p>
            <div className="flex flex-row justify-end">
                <div className="px-1 text-gray-800 inline-block transform-all duration-200 cursor-pointer hover:text-gray-50 hover:bg-blue-500 hover:shadow-xl">
                    <FontAwesomeIcon icon={faPen} className="text-xs"/>
                </div>
                <div className="px-2 text-gray-800 inline-block transform-all duration-200 cursor-pointer hover:text-gray-50 hover:bg-red-500 hover:shadow-xl" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTimes} className="text-xs"/>
                </div>
            </div>
        </div>
    )
}

export default Task
