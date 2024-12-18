import { colors } from "../util/Cores";
import { Viagens } from "./Viagens";

export class Mochilao extends Viagens {
  private _hostel: string;

  constructor(
    id: number,
    destino: string,
    duracao: string,
    preco: number,
    tipo: number,
    hostel: string
  ) {
    super(id, destino, duracao, preco, tipo);
    this._hostel = hostel;
  }

  public get hostel(): string {
    return this._hostel;
  }

  public set hostel(value: string) {
    this._hostel = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(
      colors.bg.white,
      colors.fg.yellowstrong,`Nome do Hostel: ${this._hostel}`,
      colors.reset
    );
  }
}
