import { colors } from "../util/Cores";
import { Viagens } from "./Viagens";

export class Viajantes extends Viagens {
  private _nome: string;
  private _idade: number;
  private _email: string;
  private _telefone: string;

  constructor(
    id: number,
    destino: string,
    duracao: string,
    preco: number,
    tipo: number,
    nome: string,
    email: string,
    telefone: string,
    idade: number
  ) {
    super(id, destino, duracao, preco, tipo);
    this._nome = nome;
    this._email = email;
    this._idade = idade;
    this._telefone = telefone;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(
      colors.bg.white,
      colors.fg.yellowstrong,
      `*********************************************`
    );
    console.log(`             Dados da Viajante          `);
    console.log(`*****************************************`);
    console.log(`Nome: ${this._nome}          `);
    console.log(`Idade: ${this._idade}          `);
    console.log(`Telefone: ${this._telefone}          `);
    console.log(`email: ${this._email}          `);
    console.log(`*****************************************`);
  }
}
