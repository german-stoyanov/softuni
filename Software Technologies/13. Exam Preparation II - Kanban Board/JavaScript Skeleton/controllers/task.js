const Task = require('../models/Task');

module.exports = {
    index: (req, res) => {
        Task.find().then(tasks => {
            res.render('task/index', {
            	'openTasks': tasks.filter(t => t.status === 'Open')
				,'inProgressTasks': tasks.filter(t => t.status === 'In Progress')
                ,'finishedTasks': tasks.filter(t => t.status === 'Finished')});
        });
	},
	createGet: (req, res) => {
        res.render('task/create');
	},
	createPost: (req, res) => {
        let taskArgs = req.body;

        if(!taskArgs.title){
            res.render('article/create', {error: "You need a title to create a task!"});
            return;
        }

        Task.create(taskArgs).then(task => {
            res.redirect('/');
        });
	},
	editGet: (req, res) => {
        let id = req.params.id;

        Task.findById(id).then(task => {
            if(!task) {
                res.redirect('/');
                return;
            }

            res.render('task/edit', task);
        });
	},
	editPost: (req, res) => {
		let taskId = req.params.id;
		let taskArgs = req.body;

		Task.findByIdAndUpdate(taskId, taskArgs, {runValidators:
		true}).then(tasks => {
			res.redirect('/');
		}).catch(err => {
            taskArgs.id = taskId;
            taskArgs.error = "Cannot edit task.";
			return res.render('task/edit', taskArgs)
		});
    }
};