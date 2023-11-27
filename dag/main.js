

const parser = require('./Dag').parser;

const program = parser.parse("10*20+50");
console.table(program);
toDot(program);

function toDot(arr) {
    let buffer = "";
    buffer += "Digraph g {\n";
    arr.forEach(function(element, index) {
        switch (element.op) {
            case 'num': {
                buffer += `${index} [label="${element.value}"];\n`;
                break;
            }
            case 'id': {
                buffer += `${index} [label="${element.value}"];\n`;
                break;
            }
            case '+': case '-': case '*': case '/': {
                console.log(`${index} [label="${element.op}"];`);
                buffer += `${index} [label="${element.op}"];\n`;
                buffer += `${index} -> ${element.left}\n`;
                buffer += `${index} -> ${element.right}\n`;
                break;
            }
            default:
                console.log("Should not print this!");
                break;
        }
    });
    buffer += "}\n";
    return buffer;
}