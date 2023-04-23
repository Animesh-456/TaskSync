import empcontroller from '../controller/employee-controller.js';
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/register', async (req, res) => {
    const employee = req.body;
    await empcontroller.addemployee(employee).then(user => {
        console.log("route log register", user)
        res.status(201).json(user)
    }).catch(error => {
        res.status(500).json(error)
    })
});

router.post('/login', async (req, res) => {
    const employee = req.body;
    await empcontroller.loginemployee(employee).then(user => {
        console.log("route log", user.resp, user.usr)
        res.status(201).json(user)
    }).catch(error => {
        console.log("route error", error)
        res.status(500).json(error)
    })
})
// router.get('/:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);

export default router;