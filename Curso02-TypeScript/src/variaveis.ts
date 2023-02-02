// tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "Marcos";
let idade: number = 27;
let altura: number = 1.74;

//tipos especiais: null, undefined
let nulo : null = null;
let indefinido : undefined = undefined;

//tipos abrangentes: any, void
let retorno:void;
let retornoView:any = false; //Qualquer coisa(retorno imprevisível)

//objeto -- sem previsibilidade
let produto:object = {
    name:"Marcos",
    cidade:"RJ",
    idade: 30,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

//Array
let dados: string[] = ["Alice", "Angela", "Kleber"];
let dados2: Array<string> = ["Alice", "Angela", "Kleber"];

//arrey de dois tipos idempendendo da ordem
let infos: (string | number)[] = ["Marcos", 27, "Alice", 24];

// Tuplas (respeita a ordem)
let boleto: [string, number, number] = ["conta d'agua", 199.90, 123456];

//Arrays Métodos: todos funcionam
dados.pop();

//Datas
let aniversario: Date = new Date("2023-01-11 05:00");
console.log(aniversario.toString());