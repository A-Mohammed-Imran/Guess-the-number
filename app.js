document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    const val = document.getElementById("value").value;
    if(!val){
        return
    }
    const rnum = ranNumGen();
    if(Number(val) === rnum) {
        document.getElementById("icon").innerHTML = "&#10003";
        document.getElementById("result").innerHTML = "You Guess the Right Number";
    }
    else {
        document.getElementById("icon").innerHTML = "&#10006";
        document.getElementById("result").innerText = "You Guess the Wrong Number, The Actual Number is " + rnum;
        if ( Number(val) + 10 > rnum) {
            document.getElementById("message").innerText = "You were ner but the Numer is Higher";
        } else if (Number(val) - 10 < rnum){
            document.getElementById("message").innerText = "You were ner but the Number is Lower";
        }
    }
};

const ranNumGen = () => {
    const num = Math.floor(Math.random() * 100);
    return num;
}