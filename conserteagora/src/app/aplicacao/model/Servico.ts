import { Message } from "primeng/api";
import { Grupo } from "./Grupo";
import { Severity, Summary } from "./Message";
import { Taxa } from "./Taxa";

export class Servico {

    id?: number;
    txt_nome: string = '';
    txt_descricao: string = '';
    id_grupo: Grupo;
    prazo: Number

    public constructor(init?: Partial<Servico>) {
        Object.assign(this, init);
    }

    public validarDados() {
        let messages: Message[] = [];
        if (this.txt_nome === null || this.txt_nome === undefined || this.txt_nome === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Nome do grupo' não foi preenchido" });
        }
        if (this.txt_descricao === null || this.txt_descricao === undefined || this.txt_descricao === '') {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'descricao' não foi preenchido" });
        }
        if (this.id_grupo === null || this.id_grupo === undefined) {
            messages.push({ severity: Severity.ERROR, summary: Summary.ERROR, detail: "O campo 'Grupo' não foi selecionado" });
        }

        return messages;
    }
}
