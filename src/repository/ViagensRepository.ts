import { Viagens } from "../model/Viagens";
import { Viajantes } from "../model/Viajantes";

export interface ViagensRepository {
  procurarPorId(id: number): void;
  listarTodas(): void;
  cadastrar(viagem: Viagens): void;
  atualizar(viagem: Viagens): void;
  deletar(id: number): void;
  procurarPorDestino(destino: string): void;
  comprar (id: number, nome: string, idade: number, email: string, telefone:string): void;
  listarTodosViajantes(): void ;
}
