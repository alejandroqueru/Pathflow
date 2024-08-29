import { Router } from "express";
import UserService from "../Services/user.service.js";

const userServices = new UserService();
const router = Router();

router.post('/create',
    async (req, res, next) => {
        try {
            const userData = req.body
            const newUser = await userServices.createUser(userData);
            res.json(newUser)
        } catch (error) {
            next(error)
        }
    })
    

router.get('/medals/:userId', 
    async (req, res) => {
    const { userId } = req.params;
    const getAllTasks = await userServices.getAllMedals(userId);
    res.json(getAllTasks)
});

router.get('/checkOvulatoria/:userId', 
    async (req, res) => {
    const { userId } = req.params;
    const checkMedal = await userServices.checkOvulatoria(userId);
    res.json(checkMedal)
})

router.get('/checkFolicular/:userId',
    async (req, res) => {
    const { userId } = req.params;
    const checkMedal = await userServices.checkFolicular(userId);
    res.json(checkMedal)
})

router.get('/checkLutea/:userId',
    async (req, res) => {
    const { userId } = req.params;
    const checkMedal = await userServices.checkLutea(userId);
    res.json(checkMedal)
})

router.get('/checkMenstrual/:userId', 
    async (req, res) => {
    const { userId } = req.params;
    const checkMedal = await userServices.checkMenstrual(userId);
    res.json(checkMedal)
})

export default router