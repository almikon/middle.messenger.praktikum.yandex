export default function getData() {
    let res: any = {}
    const inputList = document.querySelectorAll('input')
    inputList.forEach(input => {
        if (input.classList.contains('required')) {
            if (input.value.length > 0) {
                res[input.name] = input.value
            }
            else {
                console.log(`${input.name} не может быть пустым!`)
                input.classList.add('wrong')
            }
        }
    })
    return res
}