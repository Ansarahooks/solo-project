const User = require('./UsertModel');
const createMockDatabase = require('../createMockDatabase');
// const mockData = require('../mockData.json');


const UserController = {
  async createUser(req, res, next) {
    try {
      const {firstName, lastName} = req.body;
      const newUser = await User.create({firstName, lastName});
      createMockDatabase('../mockData.json', newUser);
      res.status(200).send(newUser);
    } catch(error) {
      return next ({
        log: 'Express error handler caught createStudent error',
        status: 400
      });
    };
  },
}

module.exports = UserController;