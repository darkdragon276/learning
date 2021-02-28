var Validate = function() {
    this.isEmpty = function(selector, placeHolder) {
        let element = document.querySelector(selector);
        let closest = element.closest("div").querySelector(".check");
        console.log(element);
        console.log(closest);
        if(element.value.trim() === '') {
            closest.innerHTML = placeHolder + " is empty";
            return null;
        }

        closest.innerHTML = "";
        return  element.value;
    }

    this.isEmail = function(selector, placeHolder) {
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let element = document.querySelector(selector);
        let closest = element.closest("div").querySelector(".check");
        console.log(element);
        console.log(closest);
        if(!emailRegex.test(element.value)) {
            closest.innerHTML = placeHolder + " is empty";
            return null;
        }

        closest.innerHTML = "";
        return  element.value;
    }
}