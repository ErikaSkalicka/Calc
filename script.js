let buttons = document.querySelectorAll('button');
let input = document.getElementById('input');
let string = "";


// Just found switch I needed to try
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let val = e.target.textContent
        switch (val){
            case"=":
            string = eval(string)
            input.value = string;
            break;

            case"AC":
            string = ""
            input.value = 0;
            break;

            case"DEL":
            string = string.substring(0, string.length-1)
            input.value = string;
            break;

            default:
                string += val
                input.value = string;
        }
    })
});





