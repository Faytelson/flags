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