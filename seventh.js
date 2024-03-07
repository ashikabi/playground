const fs = require('fs')

function generateFiles(input_file_name) {
    // Write your code here

    const rawFile = []
    const file1 = []

    // Read the File
    fs.readFile(input_file_name, 'utf8', (err, data)=>{
        if(err){
            throw Error("file not found")
        }
        data.trim().split("\n").forEach(row => rawFile.push(row.split(',')))

        //rows from File into array
        console.log(rawFile)

        //Iterate the rows
        rawFile.forEach(row => {

            if(!file1.find(item => item.product === row[2])){
                const average = rawFile.filter(r => r[2] === row[2]).map(r => parseInt(r[3])).reduce((l,c) => l + c, 0) / rawFile.length
                file1.push({ product: row[2], average})
            }

        })

        
        // Generating a new File with new rows
        const fileOneFormatted = file1.map(item =>{
            return [item.product, item.average].join(",")+'\n'
        }).join('')

        fs.writeFile(`0_${input_file_name}`,fileOneFormatted, 'utf-8', (err)=>{
            if(err){
                throw Error(err)
            }else{
                console.log("file saved")
            }
        })

        console.log(fileOneFormatted)
    })
}

generateFiles('testfile.csv')