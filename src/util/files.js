const csvtojson = require('csvtojson')
const fs = require("fs");
const fileName = "/home/mayconrt/Área de Trabalho/MKTP-IN/APLICACOES-PALIATIVAS/backend-apis/src/controllers/teste.csv"

module.exports = {
    async readFileCSV () {
        let result;

        fs.createReadStream(fileName)
        .pipe(csvtojson())
        .on('data', (data) => {
            const row = JSON.parse(data)['id;valor']
            const cols = row.split(";")
            //console.log(cols)
            result = cols
        })
        .on('end', () => {
            console.log('CSV file successfully processed')
        });   
        
        return result
          
    }, 
}   