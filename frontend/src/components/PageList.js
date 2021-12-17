import {React, useState, useEffect} from 'react'
import './TaskGroup'
import TaskGroup from './TaskGroup';
import constants from './Constants';
import './PageList.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { useParams, useLocation } from "react-router";
import {Header} from "."
import QueryUtilities from './QueryUtilities';

function PageList() {
  // const [taskGroups, setTaskGroups] = useState(constants.sample_collection_data[0].collections);
  // const [labels, setLabels] = useState(constants.sample_labels_data);
  const [taskGroups, setTaskGroups] = useState([]);
  const [labels, setLabels] = useState({});
  const [addTaskGroup, showTaskGroupInput] = useState(false);
  let {postSlug} = useParams();
  const location = useLocation();
  const {list_id, list_name} = location.state;

  const fetchTaskGroups = async () => {
    QueryUtilities.sendQuery(QueryUtilities.getAllTaskGroupsByListId(list_id))
    .then(response => {
        console.log(response)
        setTaskGroups(response.data.data.getAllTaskGroupsByList)
    })
  }
  const fetchLabels = async () => {
    QueryUtilities.sendQuery(QueryUtilities.getAllLabels())
    .then(response => {
        console.log(response)
        setLabels(response.data.data.getAllLabels)
    })
  }
  useEffect(() => {
      fetchTaskGroups();
      fetchLabels();
  }, []);

  function CreateTaskGroup(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#taskgroup-name')
    const taskgroupName = nameInput.value
    nameInput.value = ""
    console.log(taskgroupName)
    showTaskGroupInput(false)
    QueryUtilities.sendQuery(QueryUtilities.createTaskGroup(list_id, taskgroupName))
    .then(response => {
      console.log(response)
      setTaskGroups(prevData => [...prevData, response.data.data.createTaskGroup])
    })
  }

  function DeleteTaskGroup(group_id) {
    QueryUtilities.sendQuery(QueryUtilities.deleteTaskGroup(list_id, group_id))
    .then(response => {
      console.log(response)
      fetchTaskGroups()
    })
  }

  // function EditTask(group_id, setTasks, tasks) {
  //   showTaskInput(true);
  //   setEdittingTask({
  //       "group_id": group_id,
  //       "task_id": task_id
  //   })
  // }

  return (
    <>
      <Header title={list_name}/>
      <div className="flex flex-row justify-center">
        <div className="taskgroup-container w-full flex flex-row flex-wrap content-start px-10 mt-5">
          { 
            taskGroups.length > 0 && 
            taskGroups.map((taskgroup, index) => (
              <TaskGroup key={taskgroup.id} taskgroup={taskgroup} labels={labels} handleGroupDelete={() => DeleteTaskGroup(taskgroup.id)}/>
            ))
          }
          
          <div id="new-taskgroup" className="w-full md:w-1/2 lg:w-1/4">
              <div className="taskgroup-card-body p-4 bg-gray-400 bg-opacity-40 cursor-pointer text-center m-1 border border-transparent rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl hover:bg-opacity-60" onClick={showTaskGroupInput}>
                <p><FontAwesomeIcon icon={faPlusCircle} className="text-5xl mb-3 dark:text-gray-200 text-gray-800 opacity-40"/></p>
                <p className="text-xl font-light font-mono dark:text-gray-200 text-gray-800">New Task Group</p>
              </div>
          </div>
        </div>

        {
          addTaskGroup && 
          <div className="absolute w-1/2 top-60">
              <div className="flex flex-col pt-2 pb-10 bg-gray-100 shadow-2xl">
                  <div className="flex flex-row justify-end px-2">
                      <div className="px-3 py-1 bg-red-600 transition-all duration-300 hover:bg-red-700 text-white cursor-pointer" onClick={() => {showTaskGroupInput(false)}}>
                          <FontAwesomeIcon icon={faTimes}/>
                      </div>
                  </div>
                  <form action="" className="flex flex-col text-center px-10" onSubmit={(e) => {CreateTaskGroup(e)}}>
                      <input type="text" name="" id="taskgroup-name" placeholder="Task Group Name..." className="m-2 bg-transparent focus:outline-none text-gray-800 border-b-2 border-gray-800 text-xl p-2"/>
                      <div className="flex flex-row justify-center">
                          <input type="submit" name="CreateTaskGroup" value="Create Task Group" id="" className="w-1/2 m-2 p-2 border-2 border-gray-800 bg-transparent text-gray-800 transition-all duration-300 hover:bg-gray-800 hover:text-white"/>
                      </div>
                  </form>
              </div>
          </div>
        }
      </div>
    </>
  );
}

export default PageList;
