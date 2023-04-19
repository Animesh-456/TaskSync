import { addemployee, loginemployee } from '../controller/employee-controller.js';
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.post('/register', async (req, res) => {
    const employee = req.body;
    addemployee(employee).then(user => {
        res.status(201).json(user)
    }).catch(error => {
        res.status(500).json(error)
    })
});

router.post('/login', async (req, res) => {
    const employee = req.body;
    loginemployee(employee).then(user => {
        res.status(201).json(user)
    }).catch(error => {
        res.status(500).json(error)
    })
})
// router.get('/:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);

export default router;