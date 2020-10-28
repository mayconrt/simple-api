const bcrypt = require('bcrypt')
const crypt  = require('crypt')

module.exports = {

    generate(password) {
        //const pass = crypt.randomBytes(8).toString('HEX')
        console.log('teste', password)
        const salt = bcrypt.genSaltSync(10);
        const hash = '{bcrypt}' + bcrypt.hashSync(password, salt);
    
        return {'crypt': hash, 'decrypt': password}
    }

}