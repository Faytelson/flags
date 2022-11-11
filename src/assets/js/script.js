// radio switch
const radios = document.querySelectorAll('.calculator__radio'),
    calculator = document.querySelector('.calculator'),
    radioGroups = document.querySelectorAll('.calculator__radio-group');

radioGroups.forEach(radioGroup => {
    let radioItems = radioGroup.querySelectorAll('.calculator__radio');
    radioGroup.addEventListener('click', function (event) {
        if (event.target.classList.contains('calculator__radio-input') && event.target.checked === true) {
            radioItems.forEach(radio => radio.classList.remove('calculator__radio_active'))
            event.target.closest('.calculator__radio').classList.add('calculator__radio_active')
        }
    })
})

// btn result switch

// elems
const amountBtnParent = document.querySelector('.result-column__amount-btns'),
    amountBtn = document.querySelectorAll('.result-column__amount-btn'),
    amountOutput = document.querySelector('.result-column__amount-output'),
    amountBtnDecr = document.querySelector('.result-column__amount-btn_decr'),
    amountBtnIncr = document.querySelector('.result-column__amount-btn_incr');

let amountOutputValue = amountOutput.innerHTML;

// callbacks
function toggleClass(elem, arr, className) {
    arr.forEach(item => item.classList.remove(className));
    elem.classList.add(className);
}

function increaseAmountValue() {
    amountOutputValue++;
    amountOutput.innerHTML = amountOutputValue;
}

function decreaseAmountValue() {
    amountOutputValue--;
    if(amountOutputValue < 0) {
        amountOutputValue = 0;
    }
    amountOutput.innerHTML = amountOutputValue;
}

// event listeners
amountBtnParent.addEventListener('click', function (event) {
    if(event.target && event.target.classList.contains('result-column__amount-btn')) {
        toggleClass(event.target, amountBtn, 'result-column__amount-btn_active');
    }
})

amountBtnDecr.addEventListener('click', decreaseAmountValue);
amountBtnIncr.addEventListener('click', increaseAmountValue);

//range-items switch

//elems
const rangeParent = document.querySelector('.calculator__range'),
    rangeItems = document.querySelectorAll('.calculator__range-item');

//callbacks

//event listeners
rangeParent.addEventListener('click', function (event) {
    if(event.target.classList.contains('calculator__range-item')) {
        toggleClass(event.target, rangeItems, 'calculator__range-item_active');
    }
})

//range items height

rangeItems.forEach((item, index) => {
    item.style.height = `${item.offsetHeight + (index * 4)}px`;
});