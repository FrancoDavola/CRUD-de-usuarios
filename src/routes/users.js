const {Router} = require('express')
const router = Router()
const {getAllUsers , createUser , updateUser, getById , deleteUser} = require('../controllers/users')

router.get('/', getAllUsers)

router.post('/', createUser)

router.put('/:id', updateUser)

router.get('/:id', getById)

router.delete('/:id' , deleteUser)

module.exports = router