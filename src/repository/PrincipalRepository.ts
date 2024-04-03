import { Principal } from "../model/Principal";

export interface PrincipalRepository{

    procurarPorId(id: number): void;
    listarTodas(): void;
    cadastrar(principal: Principal): void;
    atualizar(principal: Principal): void;
    deletar(id: number): void;
}