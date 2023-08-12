function twodigitfoil() {
    let num1 = Math.floor(Math.random() * 90 + 10);
    let num2 = Math.floor(Math.random() * 90 + 10);
    let question = num1 + " x " + num2;
    let answer = num1 * num2;
    return ([question, answer]);
}
export { twodigitfoil };