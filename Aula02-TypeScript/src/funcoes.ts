//funções
function addNumber(x:number, y:number) {
    return x + y;
}

function addToHello(name:string){
    return `Hello ${name}`;
}

function callToPhone(phone:number | string):number | string {
    return phone;
}

//async function (promise)
async function getDatabase(id:number): Promise<number | string> {
    return "Marcos"; //phone
}

let soma: number = addNumber(4, 7);

console.log(callToPhone(980813358));