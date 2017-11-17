const express = require('express');
const router = express.Router();
const jsonParser = express.json();
const List = require('../models/list');

router
    .get('/', (req, res, next) => {
        List.find()
            .select('title')
            .lean()
            .then(lists => res.send(lists))
            .catch(next);
    })

    .post('/', jsonParser, (req, res, next) => {
        new List(req.body).save()
            .then(saved => res.send(saved))
            .catch(next);
    })

    .delete('/:id', (req, res, next) => {
        List.findByIdAndRemove(req.params.id)
            .then(list => res.send({ removed: !!list }))
            .catch(next);
    })

    .get('/:id/tasks', (req, res, next) => {
        List.findById(req.params.id)
            .select('tasks')
            .lean()
            .then(todos => res.send(todos.tasks))
            .catch(next);
    })  

    .post('/:id/tasks', (req, res, next) => {
        List.findByIdAndUpdate(req.params.id, {
            $push: { tasks: req.body }
        }, {
            new: true,
            // this means return the new version of the list doc
            // (default is to return the old version, because extra work)
            runValidators: true
        })
            .then(updated => res.send(updated.tasks[updated.tasks.length - 1]))
            .catch(next);
    })

    .delete('/:id/tasks/:taskId', (req, res, next) => {
        List.findByIdAndUpdate(req.params.id, {
            $pull: { tasks: { _id: req.params.taskId } }
        }, { new: true })
            .then(updated => res.send(updated.tasks))
            .catch(next);
    })

module.exports = router;