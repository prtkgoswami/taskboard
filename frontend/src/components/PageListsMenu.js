import {React, useState, useEffect} from 'react'
import constants from './Constants';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt, faPlusCircle, faTimes} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import {Link} from 'react-router-dom'
import QueryUtilities  from './QueryUtilities'
import {Header} from "."

function PageListsMenu() {
    // const [lists, setLists] = useState(constants.sample_collection_data);
    const [lists, setLists] = useState([]);
    const [addNewList, showNewListInput] = useState(false);
    
    const fetchLists = async () => {
        QueryUtilities.sendQuery(QueryUtilities.getAllLists())
        .then(response => {
            console.log(response)
            setLists(response.data.data.getAllLists)
        })
    }
    useEffect(() => {
        fetchLists();
    }, []);

    function CreateList() {
        const listInput = document.querySelector('#new-list-input')
        const listName = listInput.value
        listInput.value = ""
        showNewListInput(false)
        console.log("Creating New List with name " + listName)
        QueryUtilities.sendQuery(QueryUtilities.createList(listName))
        .then(response => {
            console.log(response)
            setLists(prevState => [...prevState, response.data.data.createList])
        })
    }

    function DeleteList(listId) {
        const listItem = document.querySelector(`#list-${listId}`)
        console.log("Deleting " + listId)
        console.log(listItem)
        QueryUtilities.sendQuery(QueryUtilities.deleteList(listId))
        .then(response => {
            console.log(response)
            //setLists(response.data.data.deleteList)
            fetchLists()
        })
    }

    return (
        <>
            <Header/>
            <div className="flex flex-row justify-center">
                <div className="flex flex-row flex-wrap w-2/3 justify-start">
                    {
                        lists.length === 0 && 
                        <p className="mt-20 w-full text-2xl md:text-4xl lg:text-6xl font-mono font-bold text-center text-gray-800 opacity-40 uppercase">Start your First Project</p>
                    }
                    {
                        lists.map((list) => (
                            <div key={list.id} id={`list-${list.id}`} className="w-1/2 p-5">
                                <div className="bg-gray-200 h-full flex flex-col justify-between w-full p-5 border rounded-lg shadow-xl">
                                    <Link to={`/list/`} state={{list_id: list.id, list_name: list.title}} className="flex text-xl text-left text-gray-800 border-b border-gray-600 mb-5 cursor-pointer">
                                        <p>{list.title}</p>
                                    </Link>
                                    <div className="flex flex-row justify-between">
                                        {/* <p className="py-1 text-md text-gray-500">{list.collections.length} Collections</p> */}
                                        <div className="bg-transparent transition-all duration-300 hover:bg-red-600 border border-transparent rounded-md shadow-2xl text-gray-800 hover:text-white px-2 py-1 cursor-pointer" onClick={() => {DeleteList(list.id)}}>
                                            <FontAwesomeIcon icon={faTrashAlt} className=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="w-1/2 p-5 flex flex-row justify-center">
                        <div className="bg-gray-200 bg-opacity-60 hover:bg-opacity-100 cursor-pointer h-full flex flex-col justify-between content-center w-full p-7 text-center border rounded-lg shadow-xl" onClick={() => {showNewListInput(true)}}>
                            <p><FontAwesomeIcon icon={faPlusCircle} className="text-5xl mb-3 text-gray-800 opacity-40"/></p>
                            <p className="text-xl font-light font-mono text-gray-800">New List</p>
                        </div>
                    </div>
                    
                </div>

                {
                    addNewList && 
                    <div className="absolute w-1/2 top-60">
                        <div className="flex flex-col pt-2 pb-10 bg-gray-100 shadow-2xl">
                            <div className="flex flex-row justify-end px-2">
                                <div className="px-3 py-1 bg-red-600 transition-all duration-300 hover:bg-red-700 text-white cursor-pointer" onClick={() => {showNewListInput(false)}}>
                                    <FontAwesomeIcon icon={faTimes}/>
                                </div>
                            </div>
                            <form action="" className="flex flex-col text-center px-10" onSubmit={() => {CreateList()}}>
                                <input type="text" name="" id="new-list-input" placeholder="List Name..." className="m-2 bg-transparent focus:outline-none text-gray-800 border-b-2 border-gray-800 text-xl p-2"/>
                                <div className="flex flex-row justify-center">
                                    <input type="submit" name="createList" value="Create List" id="" className="w-1/2 m-2 p-2 border-2 border-gray-800 bg-transparent text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white"/>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default PageListsMenu
