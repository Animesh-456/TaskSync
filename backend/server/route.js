//import { addUser } from '../controller/user-controller.js';
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
//import User from '../schema/user-schema.js';
//router.get('/', getUsers);
router.post('/add', async (req, res) => {
    const user = req.body;
    console.log("body in backend:-", user)
    // const newUser = new User(user);
    // try {
    //     await newUser.save();
    //     res.status(201).json(newUser);
    // } catch (error) {
    //     res.status(409).json({ message: error.message });
    // }

});
// router.get('/:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);

export default router;