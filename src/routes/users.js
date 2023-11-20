const express = require(`express`);

const UserController = require('../controller/users.js');

const router = express.Router();

//CREAT - POST
router.post('/', UserController.createNewClub);

//READ-GET
router.get('/', UserController.getAllClub);

router.get('/:idClub', UserController.getClubById)

//UPDATE - PACH
router.patch('/:idClub', UserController.updateClub);

//DELETE -Delete
router.delete('/:idClub', UserController.deleteClub);


module.exports = router;