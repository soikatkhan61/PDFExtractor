const fs = require("fs")
const pdf = require("pdf2json")

const files = fs.readdirSync("pdf_files")
console.log(files)
let patients = []

exports.uploadPDFGetController = (req,res,next) =>{


   
    (async () =>{
        console.log("ia m here")
        await Promise.all(files.map(async (file)=>{
            let parser = new pdf(this,1)
            console.log(parser)
            parser.loadPDF(`pdf_files/${file}`)

            let patient = await new Promise(async(response,rej)=>{
                parser.on("pdfParser_dataReady" , (data) =>{
                    const raw = parser.getRawTextContent().replace(/\r\n/g," ")
                    console.log(raw)
                    res.send(raw)
                })
            })
        }))
    })()

}