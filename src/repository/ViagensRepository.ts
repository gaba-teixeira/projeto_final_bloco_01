import { Viagens } from "../model/Viagens";

export interface ViagensRepository {
  procurarPorId(id: number): void;
  listarTodas(): void;
  cadastrar(viagem: Viagens): void;
  atualizar(viagem: Viagens): void;
  deletar(id: number): void;
  procurarPorDestino(destino: string): void;
}
    