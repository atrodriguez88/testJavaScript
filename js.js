// Example js
var obj = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    edad: function() {
        this.day = 7;
        this.mes = 11;
        //return (this.day + this.mes);
    }
}
var edad = new obj.edad();
console.log("My name is " + obj.fullName() + " and my bithday is in " + edad.mes + '/' + edad.day);

// Other Example with Jquery

var begin = (function($) {
    var resp = {
        init: function() {
            this.section1 = document.getElementById("s1");
            this.section2 = $("#s2");
        },
        setListening: function() {
            this.changeText();
            this.changeColor();
        },
        changeText: function() {
            this.section1.innerHTML = "Hola, new Text";
            this.section2.html("Hola, new Text");
        },
        changeColor: function() {
            this.section1.style.color = 'blue';
            this.section2.css('color', 'red');
        }
    }
    return resp;
})($);
begin.init();
begin.setListening();
