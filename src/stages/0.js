import { storage } from '../storage.js';

export const initialStage = {
    exec({ from }) {
        storage[from].stage = 1;

        return '🌟 Bem-vindo ao nosso Chatbot \n\nEu sou a Ava, sua assistente virtaul. \n*Posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```FAZER PEDIDO``` \n2️⃣ - ```VERIFICAR TAXA DE ENTREGA```\n0️⃣ - ```FALAR COM ATENDENTE```';
    },
};