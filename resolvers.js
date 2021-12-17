const models = require('./models/Post.model')

const Task = models.task;
const List = models.list;
const TaskGroup = models.taskGroup;
const Label = models.label;

const resolvers = {
    Query: {
        hello: () => {
            return "Hello World!";
        },

        // getAllLists: [List]
        getAllLists: async () => {
            console.log("Getting all Lists");
            return await List.find();
        },

        getAllTaskGroups: async () => {
            console.log("Getting all Task Groups");
            return await TaskGroup.find();
        },

        // getAllTaskGroupsByList(list_id: ID): [TaskGroup]
        getAllTaskGroupsByList: async (parent, {list_id}, context, info) => {
            console.log("Getting all Task Groups belonging to List " + list_id);
            const list = await List.findById(list_id);
            const taskGroupIds = list.taskGroups;
            const taskGroups = [];
            taskGroupIds.forEach(group_id => {
                const grp = TaskGroup.findById(group_id);
                taskGroups.push(grp);
            })
            return taskGroups;
        },

        // getAllTasksByTaskGroup(group_id: ID): [Task]
        getAllTasksByTaskGroup: async (parent, {group_id}, context, info) => {
            console.log("Getting all Tasks belonging to Task Group " + group_id);
            const group = await TaskGroup.findById(group_id);
            return group.tasks;
        },

        // getAllLabels: [Label]
        getAllLabels: async () => {
            console.log("Getting all Labels");
            return await Label.find();
        },

        getLabelsByTask: async (parent, args, context, info) => {
            const {group_id, task_id} = args;
            console.log("Getting all Labels belonging to task " + task_id);

            const group = await TaskGroup.findById(group_id);
            const task = group.tasks.id(task_id);
            const labels = [];

            task.labels.forEach(label_id => {
                const label = Label.findById(label_id);
                labels.push(label);
            });
            return labels;
        },
    },
    Mutation: {
        createList: async (parent, args, context, info) => {
            const {title} = args.list;
            console.log("Creating list with title " + title);
            const list = new List({
                title: title,
                taskGroups: []
            });
            await list.save();
            return list;
        },
        deleteList: async (parent, args, context, info) => {
            const {list_id} = args;
            console.log("Deleting list with id " + list_id);
            const list = await List.findByIdAndDelete(list_id);

            list.taskGroups.forEach(group_id => {
                TaskGroup.findByIdAndDelete(group_id)
            })

            return "List (" + list.title + ") Deleted";
        },
        updateList: async (parent, args, context, info) => {
            const {list_id} = args;
            const {title} = args.list;
            console.log("Updating list with id " + list_id + " with title " + title);
            const updates = {};
            if (title !== undefined)
                updates.title = title;
            const list = await List.findByIdAndUpdate(
                list_id,
                updates, 
                {new: true}
            );
            return list;
        },

        createTaskGroup: async(parent, args, context, info) => {
            const {list_id} = args;
            const {title} = args.taskGroup;
            const taskGroup = new TaskGroup ({
                title: title,
                tasks: []
            });
            await taskGroup.save();
            const list = await List.findById(list_id);
            list.taskGroups.push(taskGroup.id);
            await list.save();
            return taskGroup;
        },
        deleteTaskGroup: async (parent, args, context, info) => {
            const {list_id, group_id} = args;

            const taskGroup = await TaskGroup.findByIdAndDelete(group_id);
            const title = taskGroup.title
            const list = await List.findById(list_id)
            list.taskGroups = list.taskGroups.filter(id => id != group_id)
            await list.save()
            return "TaskGroup (" + title + ") deleted";
        },
        deleteTaskGroupById: async(parent, {group_id}, context, info) => {
            const group = await TaskGroup.findByIdAndDelete(group_id);
            const title = group.title;
            return "TaskGroup (" + title + ") deleted";
        },
        updateTaskGroup: async (parent, args, context, info) => {
            const {group_id} = args;
            const {title} = args.taskGroup;
            const updates = {};
            if (title !== undefined)
                updates.title = title;

            const taskGroup = await TaskGroup.findByIdAndUpdate(
                group_id, 
                updates,
                {new: true}
            )
            return taskGroup
        },

        createTask: async (parent, args, context, info) => {
            const {group_id} = args
            const {title, description, labels} = args.task;
            const task = new Task({
                title: title, 
                description: description, 
                labels: labels
            });

            const group = await TaskGroup.findById(group_id)
            group.tasks.push(task)
            await group.save()
            return task;
        },
        deleteTask: async (parent, args, context, info) => {
            const {group_id, task_id} = args;
            // const task = await Task.findByIdAndDelete(id);

            const group = await TaskGroup.findById(group_id);
            const task = group.tasks.id(task_id)
            group.tasks.pull(task_id)
            group.save();
            return "Task (" + task.title + ") Deleted";
        },
        updateTask: async (parent, args, context, info) => {
            const {group_id, task_id} = args;
            const {title, description, labels} = args.task;
            const taskGroup = await TaskGroup.findById(group_id);
            const task = taskGroup.tasks.id(task_id);
            
            if (title !== undefined)
                task.title = title;
            if (description !== undefined)
                task.description = description;
            if (labels !== undefined && labels.length > 0) {
                if (task.labels.length == 0)
                    task.labels = labels;
                else
                    task.labels.concat(labels);
            }
            await taskGroup.markModified('tasks');
            await taskGroup.save();
            return task;
        },

        createLabel: async(parent, args, context, info) => {
            const {title, color} = args.label;

            const params = {};
            params.title = title;
            if (color !== undefined)
                params.color = color;

            const label = new Label(params);
            await label.save();
            return label;
        },
        updateLabel: async(parent, args, context, info) => {
            const {id} = args;
            const {title, color} = args.label;

            const updates = {};
            if (title !== undefined)
                updates.title = title;
            if (color !== undefined)
                updates.color = color;

            const label = await Label.findByIdAndUpdate(
                id,
                updates,
                {new: true}
            );
            return label;
        },
        deleteLabel: async(parent, {id}, context, info) => {
            const label = await Label.findByIdAndDelete(id);
            return "Label (" + label.title + ") deleted";
        },
    }
}

module.exports = resolvers;