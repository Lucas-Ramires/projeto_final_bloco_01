import leia = require("readline-sync");

import { colors } from "./src/util/Colors";
import { PrincipalController } from "./src/controller/PrincipalController";
import { Periferico } from "./src/model/Periferico";
import { Hardware } from "./src/model/Hardware";


export function main() {

    let opcao,id, tipo, preco: number;
    let nome, categoria, peca: string;
    let tipoProduto = [`Periferico`,`Hardware`]
    
    const principalController: PrincipalController = new PrincipalController();




    while (true) {

        console.log(colors.bg.black, colors.fg.yellow,
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                     Kilobyte                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Produto                    ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Listar Produto pelo ID               ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Deletar Produto                      ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = leia.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong,
                "\nKilobyte Store - Perifericos e Hardwares sao aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar Produto\n\n", colors.reset);


                    nome = leia.question("Digite o nome do produto: ");

                    tipo = leia.keyInSelect(tipoProduto, "", {cancel: false}) + 1;

                    preco = leia.questionFloat("Digite o preco: ");

                    switch(tipo){
                        case 1:
                            categoria = leia.question("Digite tipo de Periferico: ");
                            principalController.cadastrar(new Periferico(principalController.gerarId(), nome, tipo, preco, categoria));
                        break;
                        case 2:
                            peca = leia.question("Digite o tipo de Hardware: ");
                            principalController.cadastrar(new Hardware(principalController.gerarId(), nome, tipo, preco, peca));
                        break;
                    }
               
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);
                    principalController.listarTodos();
                
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);
    
                        id = leia.questionInt("Digite o Id do Produto: ");
                        principalController.procurarPorId(id);
                              
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);
         
                    id = leia.questionInt("Digite o Id do Produto: ");
                    
                    let produto = principalController.buscarNoArray(id);

                    if (produto !== null){

                        nome = leia.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = leia.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                categoria = leia.question("Digite tipo de Periferico: ");
                                principalController.atualizar(new Periferico(id, nome, tipo, preco, categoria));
                                break;
                            case 2:
                                peca = leia.question("Digite tipo de Hardware: ");
                                principalController.atualizar(new Hardware(id, nome, tipo, preco, peca));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                break;

            case 5:
                    console.log(colors.fg.whitestrong,
                        "\n\nApagar um Produto\n\n", colors.reset);
    
                        id = leia.questionInt("Digite o Id do Produto: ");
                        principalController.deletar(id);               
                break;
                
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

               
                break;
        }
    }

}

function sobre(): void {
    console.log(colors.bg.black, colors.fg.greenstrong,
                "                                                       ");
    console.log("*******************************************************");
    console.log("Projeto Desenvolvidor por: Lucas Ramires");
    console.log("E-mail: kotecbr@outlook.com");
    console.log("https://github.com/Lucas-Ramires");
    console.log("*******************************************************")
    console.log("                                                       ",
    colors.reset);
}

main();
