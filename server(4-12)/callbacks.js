function display(name){
    console.log(name);
}

function func(name,display){
    console.log("In func");
    display(name);
}

func("Aman",display);