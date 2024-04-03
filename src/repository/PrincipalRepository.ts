import { Principal } from "../model/Principal";

export interface PrincipalRepository{

    procurarPorId(id: number): void;
    listarTodos(): void;
    cadastrar(principal: Principal): void;
    atualizar(principal: Principal): void;
    deletar(id: number): void;
}