import { colors } from "./src/util/Cores";
import readlinesync = require("readline-sync");

export function main() {
  let option, id, preco, tipo: number;
  let destino: string;

  while (true) {
    console.log(
      colors.bg.whitebright,
      colors.fg.bluestrong,
      "********************************************"
    );
    console.log(
      "     LáFora - Você onde precisa estar!                            "
    );
    console.log("********************************************");
    console.log("                                            ");
    console.log("           1 - Cadastrar Viagem                ");
    console.log("           2 - Listar todas as Viagens      ");
    console.log("           3 - Consultar Viagem por ID    ");
    console.log("           4 - Atualizar informações da Viagem    ");
    console.log("           5 - Deletar Viagem               ");
    console.log("           6 - Consultar Viagem por destino          ");
    console.log("           0 - Sair do programa            ");

    console.log("\n Entre com a opção desejada: ", colors.reset);
    option = readlinesync.questionInt();

    if (option === 0) {
      sobre();
      process.exit(0);
    }

    //Menu
    switch (option) {
      case 1:
        console.log(
          colors.fg.whitestrong,

          "\nCadastrar Viagem  \n",
          colors.reset
        );

        keyPress();

        break;

      case 2:
        console.log(
          colors.fg.whitestrong,

          "\nListar todas as viagens\n",
          colors.reset
        );

        keyPress();

        break;
      case 3:
        console.log(
          colors.fg.whitestrong,

          "\nBuscar Viagem por ID\n",
          colors.reset
        );
        keyPress();

        break;
      case 4:
        console.log(
          colors.fg.whitestrong,

          "\nAtualizar dados da Viagem\n",
          colors.reset
        );
        keyPress();

        break;
      case 5:
        console.log(
          colors.fg.whitestrong,

          "\nDeletar Viagem\n",
          colors.reset
        );

        keyPress();

        break;
      case 6:
        console.log(
          colors.fg.whitestrong,

          "\nBuscar viagem por destino\n",
          colors.reset
        );

        keyPress();

        break;

      default:
        console.log(
          colors.fg.whitestrong,

          "\nOpção Inválida!\n",
          colors.reset
        );
        keyPress();
        sobre();
    }
  }
}

function keyPress() {
  console.log(colors.reset, "");
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}

function sobre() {
  console.log(
    colors.fg.magentastrong,
    "\n********************************************"
  );
  console.log("  Projeto desenvolvido por: Gabriela Teixeira ");
  console.log("  Contato: gaba.andrade@outlook.com           ");
  console.log("  github.com/gaba-teixeira                    ");
  console.log("**********************************************", colors.reset);
}

main();
