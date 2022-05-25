const fs = require('fs')

//Dosya Okumak

fs.readFile('employees.json',"utf8",(err,data)=>
{
    if(err) console.log(err)
    console.log(data)
    console.log("Dosya Okundu")
})

//Dosya Yazdırmak

fs.writeFile('employees.json','{"name" : "Employee 1 Name", "salary " : 2000}','utf8',(err) => {
    if(err) console.log(err)
    console.log("Dosya Başarılı Bir Şekilde Oluşturuldu")
})

//Dosyaya Veri Eklemek veya Güncellemek

fs.appendFile('employees.json','\n {"name" : "Employee 2 Name", "salary " : 3000}','utf8',(err) => {
    if(err) console.log(err)
    console.log("Dosyaya Veri Eklendi")
}) 

//Dosya Silmek
fs.unlink('employees.json',(err) => {
    if(err) console.log(err)
    console.log("Dosya Silindi")
})

