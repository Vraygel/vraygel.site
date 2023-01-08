let result = document.querySelector('.result')
let result__wrap_res = document.querySelector('.result__wrap_res')
let select__px = document.querySelector('.select__px')
let select__max = document.querySelector('.select__max')
let select__viewport = document.querySelector('.select__viewport')
let px_text = document.querySelector('.px_text')
let calculation = document.querySelector('.calculation')
let clear_Res = document.querySelector('.clear_Res')
let clear_Css = document.querySelector('.clear_Css')
let number = document.querySelector('.number')

let name = document.getElementsByName('hero[]')

function selectedFunc() {
    let selected = Array.from(select__px.options)
    .filter(option => option.selected)
    .map(option => option.value);
    return selected
}

let sizeViewport = select__px.children[0].textContent.split('x')
let viewport = 'vw'
let max = '1920x1080'


// select__px.addEventListener('change', () => {
//     let indexOption = select__px.selectedIndex
//     sizeViewport = select__px[indexOption].text.split('x')
//     selectedFunc()
// })

select__viewport.addEventListener('change', () => {
    let indexOption = select__viewport.selectedIndex
    viewport = select__viewport[indexOption].text
})

select__max.addEventListener('change', () => {
    let indexOption = select__max.selectedIndex
    max = select__max[indexOption].text
    console.log(max)
})

function clearAll() {
    let resultClear = result.querySelectorAll('p')
    for (const p of resultClear) {
        p.remove()
    }
}

clear_Res.addEventListener('click', () => {
    clearAll()
})

clear_Css.addEventListener('click', () => {
    px_text.value = ''
})

function resFunc(index, selected) {
    let res = px_text.value.replace(/(.+\s)+\}/g, (qwer) => {
        if (/px/.test(qwer)) {
            let res = qwer.replace(/\s.+;/g, (qwe) => {
                let result
                if (/px/.test(qwe)) {
                    result = qwe.replace(/(\d+)(px)/g, (match1, match2) => {
                        return (Number(match2) * 100 / selected[index]).toFixed(2) + viewport
                    })
                } else {
                    return ''
                }
                return result + '<br>'
            })
            return '<br>' + res + '<br>'
        } else {
            return ''
        }
    })
    return res
}

function addCss(index) {
    selectedFunc().reduce(function(accumulator, item, indexItem) {
        let p = document.createElement('p')
        let res
        if(indexItem == 0){
            accumulator = max
        }
        res = resFunc(index, item.split('x'))
        p.innerHTML =  `@media (min-width: ${item.split('x')[0]}px) and (max-width: ${accumulator.split('x')[0]-1}px){
            ${res}
        }`
        result__wrap_res.append(p)
        console.log(item)
        return item
      }, selectedFunc()[0]);
}

calculation.addEventListener('click', () => {
    clearAll()
    if (viewport == 'vh') {
        addCss(1)
    } else {
        addCss(0)
    }
    
})

// parentElement


