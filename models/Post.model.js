const mongoose = require('mongoose');

const LabelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: "#f5f5f5",
    },
})

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: true,
    },
    taskGroups: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    }
})

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    labels: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
    }
})

const TaskGroupSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: true,
    },
    tasks: {
        type: [TaskSchema],
        default: [],
    }
})

const List = mongoose.model('list', ListSchema);
const TaskGroup = mongoose.model('collection', TaskGroupSchema);
const Task = mongoose.model('task', TaskSchema);
const Label = mongoose.model('label', LabelSchema);
module.exports = {
    list: List,
    taskGroup: TaskGroup,
    task: Task,
    label: Label,
};