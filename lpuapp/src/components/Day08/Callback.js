function sample(val) {
    console.log(val(), "I am calling function"); // val() => undefined since testing doesn't return anything

}

function testing() {
    console.log("I am called function");
    return "I am called function"; // This will be returned to the calling function where this function is invoked.
}

sample(testing);
