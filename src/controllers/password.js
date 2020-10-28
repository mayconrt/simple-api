const pass = require('../util/password')

module.exports = {

    async index(request, response) {

        const { password } = request.params
        
        const result = pass.generate(password)

        return response.status(200).json(result)

    }
}