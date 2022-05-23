const arguments = process.argv.slice(2)
function circle_area(r)
{
    var area = 3.14 * r * r
    console.log("Dairenin Yarıçapı : ",r)
    console.log("Dairenin Alanı : ",area)
}
circle_area(arguments[0]*1)
