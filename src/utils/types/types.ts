export type Resposta = {
    resposta: string;
    quantidade: number;
};

export type Pergunta = {
    pergunta: string;
    respostas: Array<Resposta>;
};
