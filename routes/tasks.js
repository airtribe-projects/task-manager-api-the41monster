const express = require('express');
const router = express.Router();

const tasks = [];
let idCount = 1;

router.post('/api/v1/tasks', (req, res)=>{
    const { title, description, status } = req.body;

    if (!title || typeof title!=='string'){
        return res
        .status(400)
        .send({message:'Title should be a string'});
    }

    if (status && !['pending', 'complete'].includes(status)){
        return res
        .status(400)
        .send({message:'status should be "complete" or "pending"'});
    }

    newTask = {
        title,
        description: description || '',
        status: status || 'pending',
        id: idCount++
    };
    tasks.push(newTask);
    res.send(newTask);
});

router.get('/api/v1/tasks', (req, res)=>{
    res.send(tasks);
});

router.get('/api/v1/tasks/:id', (req, res)=>{
    const taskId = parseInt(req.params.id, 10);
    const index = tasks.findIndex((t)=>t.id===taskId);

    if (index===-1){
        return res
        .status(404)
        .send({message:"Task with id not found"});
    }
    res.send(tasks[index]);
});

router.delete("/api/v1/tasks/:id", (req, res)=>{
    const taskId = parseInt(req.params.id, 10);
    const index = tasks.findIndex((t)=>t.id===taskId);

    if (index===-1){
        return res
        .status(404)
        .send({message:"Task with given id not found"});
    }
    tasks.splice(index, 1);
    res.send({message:"Task deleted successfully"})
});

router.put("/api/v1/tasks/:id", (req, res)=>{
    const taskId = parseInt(req.params.id, 10);
    const index = tasks.findIndex((t)=>t.id===taskId);

    if (index===-1){
        return res
        .status(404)
        .send({message:"Task with given id not found"});
    }

    const { title, description, status } = req.body;
    const task = tasks[index];

    if (title) task.title = title;
    if (description) task.description = description;
    if (status && !['pending', 'complete'].includes(status)) task.status = status;

    res.send(task);
});

module.exports = router;