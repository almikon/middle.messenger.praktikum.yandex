export default function getData() {
    let res: Record<string, string> = {}
    const inputList = document.querySelectorAll('input')
    inputList.forEach(input => {
        if (input.classList.contains('required')) {
            if (input.value.length > 0) {
                res[input.name] = input.value
            }
            else {
                input.classList.add('wrong')
            }
        }
    })
    return res
}