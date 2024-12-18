import { ViagensController } from "./src/controller/ViagensController";
import { Mochilao } from "./src/model/Mochilao";
import { RetiroEspiritual } from "./src/model/RetiroEspiritual";
import { Viagens } from "./src/model/Viagens";
import { Viajantes } from "./src/model/Viajantes";
import { colors } from "./src/util/Cores";
import readlinesync = require("readline-sync");

export function main() {
  let option, id, preco, duracao, tipo, idade: number;
  let destino, nome, email, telefone: string;
  const tipoViagem = ["Mochilao", "Retiro Espiritual"];

  let viagem = new ViagensController();

  viagem.cadastrar(
    new Mochilao(
      viagem.gerarId(),
      "Italia",
      "15 dias",
      10250.99,
      1,
      "Hostel laVidaBelle"
    )
  );

  viagem.cadastrar(
    new Mochilao(viagem.gerarId(), "China", "20 dias", 15000, 1, "Hostel MKT")
  );

  viagem.cadastrar(
    new RetiroEspiritual(
      viagem.gerarId(),
      "India",
      "30 dias",
      60000,
      2,
      "Hindu Center"
    )
  );

  viagem.cadastrar(
    new RetiroEspiritual(
      viagem.gerarId(),
      "Peru",
      "10 dias",
      8500,
      2,
      "Hare Krishna Center"
    )
  );
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
    console.log("           7 - Comprar Viagem                   ");
    console.log("           8 - Listar Viajantes que compraram viagens com a gente!      ");
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

        destino = readlinesync.question("Digite o destino da viagem: ");
        preco = readlinesync.questionInt("Digite o valor da viagem: ");
        duracao = readlinesync.question("Digite a duracao da viagem: ");

        tipo =
          readlinesync.keyInSelect(tipoViagem, "Escolha o tipo de viagem", {
            cancel: false,
          }) + 1;
        keyPress();
        switch (tipo) {
          case 1:
            let hostel: string = readlinesync.question(
              "Digite o nome do hostel: "
            );
            viagem.cadastrar(
              new Mochilao(
                viagem.gerarId(),
                destino,
                duracao,
                preco,
                tipo,
                hostel
              )
            );

            break;
          case 2:
            let centroEspiritual: string = readlinesync.question(
              "Digite o nome do centro espiritual: "
            );
            viagem.cadastrar(
              new RetiroEspiritual(
                viagem.gerarId(),
                destino,
                duracao,
                preco,
                tipo,
                centroEspiritual
              )
            );
            break;
        }

        keyPress();

        break;

      case 2:
        console.log(
          colors.fg.whitestrong,

          "\nListar todas as viagens\n",
          colors.reset
        );
        viagem.listarTodas();

        keyPress();

        break;
      case 3:
        console.log(
          colors.fg.whitestrong,

          "\nBuscar Viagem por ID\n",
          colors.reset
        );
        id = readlinesync.questionInt("Digite o ID da viagem: ");
        viagem.procurarPorId(id);

        keyPress();

        break;
      case 4:
        console.log(
          colors.fg.whitestrong,

          "\nAtualizar dados da Viagem\n",
          colors.reset
        );
        id = readlinesync.questionInt("Digite o ID do viagem: ");
        let novoviagem = viagem.buscarnoArray(id);
        if (novoviagem !== null) {
          destino = readlinesync.question("Digite o destino do viagem: ");
          duracao = readlinesync.question("Digite a duracao do viagem: ");

          preco = readlinesync.questionInt("Digite o preco do viagem: ");
          tipo = novoviagem.tipo;
          switch (tipo) {
            case 1:
              let hostel: string = readlinesync.question(
                "Digite o nome do hostel: "
              );
              viagem.atualizar(
                new Mochilao(id, destino, duracao, preco, tipo, hostel)
              );

              break;
            case 2:
              let centroEspiritual: string = readlinesync.question(
                "Digite o nome do centro espiritual: "
              );
              viagem.atualizar(
                new RetiroEspiritual(
                  id,
                  destino,
                  duracao,
                  preco,
                  tipo,
                  centroEspiritual
                )
              );

              break;
          }
        } else
          console.log(colors.fg.red, "Viagem não encontrado", colors.reset);
        keyPress();

        break;
      case 5:
        console.log(
          colors.fg.whitestrong,

          "\nDeletar Viagem\n",
          colors.reset
        );
        id = readlinesync.questionInt(
          "Digite o ID da viagem que deseja deletar: "
        );

        let confirmar = readlinesync.keyInYN(
          "Tem certeza que deseja deletar a viagem? Digite Y - para sim ou N - para nao"
        );

        if (confirmar) {
          viagem.deletar(id);
        }

        keyPress();

        break;
      case 6:
        console.log(
          colors.fg.whitestrong,

          "\nBuscar viagem por destino\n",
          colors.reset
        );
        destino = readlinesync.question("Digite o destino do produto: ");
        viagem.procurarPorDestino(destino);

        keyPress();

        break;

      case 7:
        console.log(
          colors.fg.whitestrong,

          "\nComprar Viagem\n",
          colors.reset
        );

        id = readlinesync.questionInt(
          "Digite o ID da viagem que deseja comprar: "
        );
        let compraViagem = viagem.buscarnoArray(id);

        if (compraViagem !== null) {
          nome = readlinesync.question("Digite o seu nome completo: ");
          email = readlinesync.questionEMail("Digite o seu email: ");
          idade = readlinesync.questionInt("Digite sua idade: ");
          telefone = readlinesync.question("Digite o seu telefone: ");

          viagem.comprar(id, nome, idade, email, telefone);
        } else {
          console.log(colors.fg.red, "Viagem não encontrada!", colors.reset);
        }
        keyPress();
        break;
        case 8:
            console.log(
              colors.fg.whitestrong,

              "\nListar todas os viajantes que compraram viagens com a gente: \n",
              colors.reset
            );
            
            viagem.listarTodosViajantes();

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
