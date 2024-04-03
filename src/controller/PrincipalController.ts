import { Principal } from "../model/Principal";
import { PrincipalRepository } from "../repository/PrincipalRepository";

export class PrincipalController implements PrincipalRepository {
   
    private listaPrincipal: Array<Principal> = new Array<Principal>();

    public id: number = 0;
  
    procurarPorId(id: number): void {
        let buscaproduto = this.buscarNoArray(id);

        if(buscaproduto !== null)
            buscaproduto.visualizar()
        else
            console.log("\nO produto não foi Encontrado!")
    }

    listarTodos(): void {
        for (let principal of this.listaPrincipal) {
            principal.visualizar();
        }
    }
    cadastrar(principal: Principal): void {
        this.listaPrincipal.push(principal);
        console.log("O produto foi adicionado!")
    }
    atualizar(principal: Principal): void {
        let buscaPrincipal = this.buscarNoArray(principal.id);
        if (buscaPrincipal !== null) {
            this.listaPrincipal[this.listaPrincipal.indexOf(buscaPrincipal)] = principal;
            console.log(`O produto ${principal.id} foi atualizado com sucesso`)
        } else
            console.log("O produto não foi encontrado!")
    }
    deletar(numero: number): void {
        let buscaPrincipal = this.buscarNoArray(numero);
        if (buscaPrincipal !== null) {
            this.listaPrincipal.splice(this.listaPrincipal.indexOf(buscaPrincipal), 1)
            console.log(`O produto ${numero} foi excluido com sucesso`)
        } else
            console.log("O produto não foi encontrado!")
    }
   
    public gerarId(): number {
        return ++this.id
    }

    public buscarNoArray(numero: number): Principal | null {
        for (let principal of this.listaPrincipal) {
            if (principal.id === numero)
                return principal;
        }
        return null;
    }
}
