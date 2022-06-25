// *** Write your code here***
const calcNumbers = (num) => {
     document.form.displayResult.value = document.form.displayResult.value + num;
}
const backspace = () => {
    let exp = document.form.displayResult.value;
    document.form.displayResult.value = exp.substring(0, exp.length - 1);
}