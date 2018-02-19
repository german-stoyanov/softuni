function addItem() {
    let value  = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');
    let text = document.getElementById('newItemText');
    let option = document.createElement('option');
    option.textContent = text.value;
    option.value = value.value;
    menu.appendChild(option)
    value.value = ''
    text.value = ''

}