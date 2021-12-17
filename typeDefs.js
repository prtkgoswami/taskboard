const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Label {
        id: ID
        title: String
        color: String
    }
    type Task {
        id: ID
        title: String
        description: String
        labels: [ID]
    }
    type TaskGroup {
        id: ID
        title: String
        tasks: [Task]
    }
    type List {
        id: ID
        title: String
        taskGroups: [ID]
    }

    type Query {
        hello: String

        getAllLists: [List]
        getAllTaskGroups: [TaskGroup]
        getAllTaskGroupsByList(list_id: ID): [TaskGroup]
        getAllTasksByTaskGroup(group_id: ID): [Task]

        getAllLabels: [Label]
        getLabelsByTask(group_id: ID, task_id: ID): [Label]
    }

    type Mutation {
        createList(list: ListInput): List
        deleteList(list_id: ID): String
        updateList(list_id: ID, list: ListInput): List

        createTaskGroup(list_id: ID, taskGroup: TaskGroupInput): TaskGroup
        deleteTaskGroup(list_id: ID, group_id: ID): String
        deleteTaskGroupById(group_id: ID): String
        updateTaskGroup(group_id: ID, taskGroup: TaskGroupInput): TaskGroup

        createTask(group_id: ID, task: TaskInput): Task
        deleteTask(group_id: ID, task_id: ID): String
        updateTask(group_id: ID, task_id: ID, task: TaskInput): Task

        createLabel(label: LabelInput): Label
        deleteLabel(id: ID): String
        updateLabel(id: ID, label: LabelInput): Label
    }

    input LabelInput {
        title: String
        color: String
    }
    input ListInput {
        title: String
        taskGroups: [ID]
    }
    input TaskInput {
        title: String
        description: String
        labels: [ID]
    }
    input TaskGroupInput {
        title: String
        tasks: [TaskInput]
    }
`;

module.exports = typeDefs;