// get input field value and convert to number(float)
function getInputFieldById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = "";
    return inputFieldValue;
}
// get element value and convert to number(float)
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

// Set elememt(New Value) value by ID
function setElementNewValueById(elementId, newValue) {
    const elementTextValue = document.getElementById(elementId);
    elementTextValue.innerText = newValue;
}

