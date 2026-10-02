let expression="";

function appendValue(val) {
    if (expression=="" && "+*/%".includes(val)) return;

    const last=expression.slice(-1);
    const ops="+-*/%";
    if (ops.includes(last) && ops.includes(val)) {
        expression=expression.slice(0, -1) + val;
    } else {
        expression += val;
    }
    document.getElementById("display").value = expression;
}
function clearAll() {
    expression="";
    document.getElementById("display").value="";
}

function backspace(){
    expression=expression.slice(0,-1);
    document.getElementById("display").value=expression;
}

function calculate() {
    if (!expression) return;

    const last= expression.slice(-1);
    if ("+-*/%".includes(last)) expression=expression.slice(0,-1);

    try {
        const result=eval(expression);
        expression=String(result);
        document.getElementById("display").value= expression;
    } catch (err) {
        document.getElementById("display").value= "Error";
        expression="";
    }
}