import taskcontroller from '../controller/task-controller.js';
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/addtask', async (req, res) => {
    await taskcontroller.addtask(req.body).then(result => {
        res.status(201).json(result)
    }).catch(error => {
        res.status(500).json(error)
    })
})

router.get('/viewtasks', async (req, res) => {
    console.log("Task status us", req.query.status)
    await taskcontroller.viewtask(req.query.id, req.query.status).then(result => {
        console.log("Task result us", result)
        res.status(201).json(result)

    }).catch(error => {
        res.status(500).json(error)
    })
})

router.get('/recent-tasks', async (req, res) => {
    await taskcontroller.recent_task(req.query.id).then(result => {
        console.log("Task result us", result)
        res.status(201).json(result)
    }).catch(error => {
        res.status(500).json(error)
    })
})

router.get('/viewtaskbyid', async (req, res) => {
    await taskcontroller.viewstaskByid(req.query.id).then(result => {
        res.status(201).json(result)
    }).catch(error => {
        res.status(500).json(error)
    })
})

router.post('/updatetask', async (req, res) => {
    await taskcontroller.updatetask(req.body).then(result => {
        console.log(result)
        res.status(201).json(result)
    }).catch(error => {
        res.status(500).json(error)
    })
})


router.post('/deletetask', async (req, res) => {
    await taskcontroller.deletetask(req.query.id).then(result => {
        res.status(201).json(result)
    }).catch(error => {
        res.status(500).json(error)
    })
})

router.post('/assigntask', async (req, res) => {
    await taskcontroller.assigntask(req.body).then(result => {
        res.status(201).json(result)
    }).catch(error => {
        res.status(500).json(error)
    })
})


export default router;