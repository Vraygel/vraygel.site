const PREVIOUS = document.querySelectorAll('.previous');
const NEXT = document.querySelectorAll('.next');
const MONTH = document.querySelector('.month');
const YEAR = document.querySelector('.year');
const INPUT_YEAR = document.querySelector('.input_year');
const TEXTAREA_MONTH = document.querySelector('.textarea_month');
const TABLE_BODY = document.querySelector('.table_body');
const CLOSE = document.querySelector('.close');
const CALENDAR = document.querySelector('.calendar_wrap');
const CALENDAR_NONE = document.querySelector('.calendar_none');
const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
let date = new Date();




CLOSE.addEventListener('click', () => {
    CALENDAR.classList.remove('active')
    CALENDAR_NONE.classList.remove('none')
})

const today = date.getDate()
YEAR.textContent = date.getFullYear();
MONTH.textContent = MONTHS[date.getMonth()];

createTable(date.getFullYear(), date.getMonth())

CALENDAR_NONE.textContent = `Сегодня: ${today} ${MONTH.textContent} ${YEAR.textContent}`
CALENDAR_NONE.addEventListener('click', () => {
    CALENDAR_NONE.classList.add('none')
    CALENDAR.classList.add('active')
})

function funcSetAttribute(tag, attr, value) {
    return tag.setAttribute(attr, value)
}

function listYRemove() {
    INPUT_YEAR.classList.remove('input_year_active')
    TEXTAREA_MONTH.classList.remove('textarea_month_active')
    clearTable()
}

function monthIndexSearch() {
    return MONTHS.indexOf(MONTH.textContent) //ищем индекс месяца
}

function clearTable() {
    let table = TABLE_BODY.querySelectorAll('tr')
    for (const item of table) {
        item.remove()
    }
}

function addEntry() {
    let tdEntry = document.createElement('td');
    tdEntry.textContent = '8-00'
    return tdEntry
}

function createTable(year, monthIndex) {
    let i = 1

    let daysInMonth = new Date(year, monthIndex + 1, 0).getDate() //количество дней в текущем месяце
    let currentIndexMonthPrevious = new Date(year, monthIndex, 0).getDate() //количество дней в предыдущем месяце
    let dayWeek = new Date(year, monthIndex, 1).getDay() //день недели 1-го числа текущего месяца
    let indexNextMonth = monthIndex + 1 // индекс следущего месяца
    indexNextMonth == 12 ? indexNextMonth = 0 : indexNextMonth
    let indexPreviousMonth = monthIndex - 1 // индекс предыдущего месяца
    indexPreviousMonth == -1 ? indexPreviousMonth = 11 : indexPreviousMonth
    let z // число предыдущего месяца в понедельник первой недели

    if (dayWeek == 0) {
        z = currentIndexMonthPrevious - 5
    } else {
        z = currentIndexMonthPrevious - (dayWeek - 2)
    }
    while (i <= daysInMonth) {
        let y = 1
        let d = 1
        let tr = document.createElement('tr');
        let trEntry = document.createElement('tr');
        while (y <= 7) {
            let tdDay = document.createElement('td');
            funcSetAttribute(tdDay, 'colspan', 2)
            if (z <= currentIndexMonthPrevious) {
                tdDay.textContent = `${z} ${MONTHS[indexPreviousMonth]}`
                z++
                y++
                tr.appendChild(tdDay);
                
            } else {
                if (i > daysInMonth) {
                    tdDay.textContent = `${d} ${MONTHS[indexNextMonth]}`
                    d++
                    y++
                    tr.appendChild(tdDay);
                } else {
                    tdDay.textContent = i
                    if (i == date.getDate() && date.getMonth() == monthIndexSearch() && date.getFullYear() == +YEAR.textContent) {
                        tdDay.style.backgroundColor = '#8d99ae' 
                    }
                    tr.appendChild(tdDay);
                    i++
                    y++
                }
            }
            
        }
        TABLE_BODY.append(tr);
    }
}

for (const item of PREVIOUS) {
    item.addEventListener('click', () => {
        let monthIndex = monthIndexSearch()
        if (item.parentElement.classList.contains('months_wrap')) {
            monthIndex == 0 ? monthIndex = 11 : monthIndex = (monthIndex - 1) % MONTHS.length
            if (monthIndex == 11) { //если месяц меняется на декабрь, меняем год
                YEAR.textContent = +YEAR.textContent - 1
            }
            MONTH.textContent = MONTHS[monthIndex]
            listYRemove()
            createTable(YEAR.textContent, monthIndex)
        } else {
            YEAR.textContent = +YEAR.textContent - 1
            listYRemove()
            createTable(YEAR.textContent, monthIndex)
        }
    })
}

for (const item of NEXT) {
    item.addEventListener('click', () => {
        let monthIndex = monthIndexSearch()
        if (item.parentElement.classList.contains('months_wrap')) {
            monthIndex = (monthIndex + 1) % MONTHS.length;
            if (monthIndex == 0) { //если месяц меняется на январь, меняем год
                YEAR.textContent = +YEAR.textContent + 1
            }
            MONTH.textContent = MONTHS[monthIndex]
            listYRemove()
            createTable(YEAR.textContent, monthIndex)
        } else {
            YEAR.textContent = +YEAR.textContent + 1
            listYRemove()
            createTable(YEAR.textContent, monthIndex)
        }
    })
}

YEAR.addEventListener('click', () => {
    INPUT_YEAR.classList.toggle('input_year_active')
    INPUT_YEAR.value = YEAR.textContent
    TEXTAREA_MONTH.classList.remove('textarea_month_active')

    INPUT_YEAR.addEventListener('click', () => {
        INPUT_YEAR.value = ''
    })
    INPUT_YEAR.addEventListener('change', () => {
        YEAR.textContent = INPUT_YEAR.value
        clearTable()
        createTable(YEAR.textContent, monthIndexSearch())
    })
})

MONTH.addEventListener('click', () => {
    TEXTAREA_MONTH.classList.toggle('textarea_month_active')
    INPUT_YEAR.classList.remove('input_year_active')

    TEXTAREA_MONTH.addEventListener('click', (event) => {
        MONTH.textContent = event.target.textContent
        listYRemove()
        createTable(YEAR.textContent, monthIndexSearch())
    })
})