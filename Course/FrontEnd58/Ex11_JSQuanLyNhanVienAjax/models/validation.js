var Validate = function () {

}

Validate.isRegex = function (regex, selector, ...string) {
    let element_e = document.querySelector(selector);
    let closest_e = element_e.closest("div").querySelector(".check");
    // console.log(element_e);
    // console.log(closest_e);
    closest_e.innerHTML = "";
    if (!regex.test(element_e.value)) {
        for (let i = 0; i < string.length; i++) {
            closest_e.innerHTML += " " + string[i];
        }
        return null;
    }
    return element_e.value;
}

Validate.isEmpty = function (selector, ...string) {
    let element_e = document.querySelector(selector);
    let closest_e = element_e.closest("div").querySelector(".check");
    // console.log(element_e);
    // console.log(closest_e);
    closest_e.innerHTML = "";
    if (element_e.value === "") {
        for (let i = 0; i < string.length; i++) {
            closest_e.innerHTML += " " + string[i];
        }
        return null;
    }
    return element_e.value;
}

Validate.isEmail = function (selector, placeHolder) {
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return Validate.isRegex(emailRegex, selector, placeHolder, "is not email");
}

Validate.isNumber = function (selector, placeHolder) {
    let numberRegex = /^\d+$/g;
    return Validate.isRegex(numberRegex, selector, placeHolder, "is not number");
}

Validate.inRange = function (selector, min, max, ...string) {
    let element_e = document.querySelector(selector);
    let elementValue_f = parseFloat(element_e.value);
    let closest_e = element_e.closest("div").querySelector(".check");
    // console.log(element_e);
    // console.log(closest_e);
    closest_e.innerHTML = "";
    if (!(elementValue_f >= min && elementValue_f <= max)) {
        for (let i = 0; i < string.length; i++) {
            closest_e.innerHTML += " " + string[i];
        }
        closest_e.innerHTML += " ngoai range";
        return null;
    }
    return elementValue_f;
}

Validate.isName = function (selector, placeHolder) {
    let nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    return Validate.isRegex(nameRegex, selector, placeHolder, "is not name");
}

Validate.isKey = function (selector, minLen, maxLen, placeHolder) {
    let limitRegex =  new RegExp(`^[\\d]{${minLen},${maxLen}}$`, "g");
    return Validate.isRegex(limitRegex, selector, placeHolder, `from ${minLen} to ${maxLen} number`);
}

Validate.hasNullProperty = function (object) {
    for (const property in object) {
        if (Object.hasOwnProperty.call(object, property)) {
            let value = object[property];
            console.log(value);
            if (value === null || value === NaN) {
                return true;
            }
        }
    }
    return false;
}