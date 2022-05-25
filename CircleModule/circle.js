module.exports = {
    circleArea,
    circleCircumference,
}

function circleArea(radius)
{
    console.log("Dairenin Alanı : ",Math.PI* radius * radius)
}
function circleCircumference(radius)
{
    console.log("Dairenin Çevresi : ",2*Math.PI*radius)
}