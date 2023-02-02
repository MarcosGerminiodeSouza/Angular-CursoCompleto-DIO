/*
//decorators
function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas{}
*/

/*
//decorators
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    };
}

@apiVersion("1.10")
class Api{}

const api = new Api();
console.log(api.__version);
*/