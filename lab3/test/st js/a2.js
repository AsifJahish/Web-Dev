
var s_name = { //Global variable
    name: "Student1",
    age: 20,
    gpa: 3.2
}


function hi(){ //new block
    if(s_name["gpa"] >= 3.5){
        console.log("hello " + s_name["name"]);

    }
    else{
        console.log("Student gpa less than 3.5");
    }
}



function news(name, age, gpa){

    console.log(name)
    console.log(age)
    console.log(gpa)

    var newStudent= {
        name: name,
        age: age,
        gpa: gpa
    }

    return newStudent;

}

var newStudent2= news("noName", 23,3.4)
console.log(newStudent2)


hi();