import { colors } from "../util/Cores";
import { Viagens } from "./Viagens";

export class RetiroEspiritual extends Viagens {
  private _centroEspiritual: string;

  constructor(
    id: number,
    destino: string,
    duracao: string,
    preco: number,
    tipo: number,
    centroEspiritual: string
  ) {
    super(id, destino, duracao, preco, tipo);
    this._centroEspiritual = centroEspiritual;
  }

  public get centroEspiritual(): string {
    return this._centroEspiritual;
  }

  public set centroEspiritual(value: string) {
    this._centroEspiritual = value;
  }

  public visualizar(): void {
    super.visualizar();
    console.log(
      colors.bg.white,
      colors.fg.yellowstrong,`Nome do Centro Espiritual: ${this._centroEspiritual}`,
      colors.reset
    );
  }
}
