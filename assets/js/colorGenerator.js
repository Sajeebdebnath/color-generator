let first_code = document.getElementById('first-code')
let second_code = document.getElementById('second-code')
let third_code = document.getElementById('third-code')
let generate_btn = document.getElementById('generate_btn')


generate_btn.addEventListener('click', GenerateColor)

function GenerateColor(e){
    e.preventDefault()

    first_item = makeColor()
    second_item = makeColor()
    third_item = makeColor()

    document.querySelector('.color-palet').style.backgroundColor = first_item
    first_code.innerText =first_item

    document.querySelector('.second-palet').style.backgroundColor = second_item
    second_code.innerText =second_item

    document.querySelector('.third-palet').style.backgroundColor = third_item
    third_code.innerText =third_item
}



function makeColor(){
    let hex_code = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10', 'a', 'b', 'c', 'd', 'e', 'f']
    let color = "#"

    for(let i = 0; i<6; i++){
        let random = Math.round(Math.random()*15)
        let num = hex_code[random]

        color += num
    }
    return color
}
