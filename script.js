// Let's start from something easy.
// Variable is also an object.

var a = "Apple";
document.getElementById("demo").innerHTML = a;

var x = {name: "Igor", surname: "Torgaiev", job: "programmer"}
document.getElementById("demo1").innerHTML = x.name + " " + x.surname + " is a " + x.job;

// We can add as many variables as we want. Other example:

var man = {
    name: "Igor",
    surname: "Torgaiev",
    age: 29,
    hisJob: "programmer",
    interest: "sports" 
}
document.getElementById("demo2").innerHTML = man.name + " " + man.surname + " is " + man.age + " years old. He wants to become a " + man.hisJob + ", and he is interested in " + man.interest; 

// keyword this

var person = {
    firstName: "Jack",
    secondName: "Jackson",
    likes: "dancing",
    fullInfo: function() {
        return this.firstName + " " + this.secondName + " likes " + this.likes;
    }
};
document.getElementById("demo3").innerHTML = person.fullInfo();

// alert

var lady = {
    name: "Chris",
    surname: "Smith",
    type: "beautiful"
}
alert(lady.name + " " + lady.surname + " is " + lady.type + " lady"); 