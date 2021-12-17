import React from 'react'
import axios from 'axios'
import { faMarsDouble } from '@fortawesome/free-solid-svg-icons'
import constants from './Constants'

function getAllLists() {
    return `
        {
            getAllLists {
                id
                title
            }
        }
    `
}
function createList(listTitle) {
    return `
        mutation {
            createList (list: {title: "${listTitle}"}) {
                id
                title
            }
        }
    `
}
function deleteList(listId) {
    return `
        mutation {
            deleteList(list_id: "${listId}")
        }
    `
}
function updateList(listId, listTitle) {
    return `
        mutation {
            updateList (
                list_id: "${listId}",
                list: {title: "${listTitle}"}
            ) {
                id
                title
                taskGroups
            }
        }
    `
}

function getAllTaskGroupsByListId(listId) {
    return `
        {
            getAllTaskGroupsByList (list_id: "${listId}") {
                id
                title
                tasks {
                    id
                    title
                    description
                }
            }
        }
    `
}

function createTaskGroup(listId, taskGroupTitle) {
    return `
        mutation {
            createTaskGroup (
                list_id: "${listId}",
                taskGroup: {title: "${taskGroupTitle}"}
            ) {
                id
                title
                tasks {
                    id
                    title
                    description
                    labels
                }
            }
        }
    `
}
function deleteTaskGroup(listId, groupId) {
    return `
        mutation {
            deleteTaskGroup (
                list_id: "${listId}", 
                group_id: "${groupId}"
              )
        }
    `
}
function updateTaskGroup(groupId, newTitle) {
    return `
        mutation {
            updateTaskGroup (
                group_id: "${groupId}",
                taskGroup: {title: "${newTitle}"}
            ) {
                id
                title
                tasks {
                    id
                    title
                    description
                    labels
                }
            }
        }
    `
}

function getAllTasksByTaskGroup(group_id) {
    return `
        {
            getAllTasksByTaskGroup (group_id: "${group_id}") {
                id
                title
                description
                labels
            }
        }
    `
}
function createTask(group_id, title, description, labels) {
    var labellist
    if (labels === undefined || labels === [])
        labellist = []
    else
        labellist = labels
    return `
        mutation {
            createTask (
                group_id: "${group_id}",
                task: {
                    title: "${title}",
                    description: "${description}",
                    labels: ["${labellist}"]
                }
            ) {
                id
                title
                description
                labels
            }
        }
    `
}
function deleteTask(group_id, task_id) {
    return `
        mutation {
            deleteTask (
                group_id: "${group_id}",
                task_id: "${task_id}"
            )
        }
    `
}
function updateTask(group_id, task_id, title, description, labels) {
    return `
        mutation {
            updateTask (
                group_id: "${group_id}",
                task_id: "${task_id}",
                task: {
                    title: "${title}",
                    description: "${description}",
                    labels: ${labels}
                }
            ) {
                id
                title
                description
                labels
            }
        }
    `
}

function getAllLabels() {
    return `
        {
            getAllLabels {
                id
                title
                color
            }
        }
    `
}
function getLabelsByTask(group_id, task_id) {
    return `
        {
            getLabelsByTask (
                group_id: "${group_id}",
                task_id: "${task_id}"
            ) {
                id
                title
                color
            }
        }
    `
}
function createLabel(title, color) {
    return `
        mutation {
            createLabel (
                label: {
                    title: "${title}"
                    color: "${color}"
                }
            ) {
                id
                title
                color
            }
        }
    `
}
function deleteLabel(label_id) {
    return `
        mutation {
            deleteLabel (id: "${label_id}")
        }
    `
}
function updateLabel(label_id, title, color) {
    return `
        mutation {
            updateLabel (
                id : "${label_id}", 
                label: {
                    title: "${title}",
                    color: "${color}"
                }
            ) {
                id
                title
                color
            }
        }
    `
}

function sendQuery(query, variables) {
    console.log(query)
    return axios.post(constants.graphql_uri, {
        query
    });
}


export default {
    getAllLists,
    createList,
    deleteList,
    updateList,
    getAllTaskGroupsByListId,
    createTaskGroup,
    deleteTaskGroup,
    updateTaskGroup,
    getAllTasksByTaskGroup,
    createTask,
    deleteTask,
    updateTask,
    getAllLabels,
    getLabelsByTask,
    createLabel,
    deleteLabel,
    updateLabel,
    sendQuery
}
