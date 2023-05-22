import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
    exec({ from, message }) {
        const order =
            '\n-----------------------------------\n#️⃣ - ```FINALIZAR AGENDAMENTO``` \n*️⃣ - ```CANCELAR AGENDAMENTO```';
        if (message === '*') {
            storage[from].stage = 0;
            storage[from].itens = [];

            return '🔴 Agendamento *CANCELADO* com sucesso. \n\n ```Volte Sempre!```';
        } else if (message === '#') {
            storage[from].stage = 3;

            return (
                '🗺️ Agora, informe o *Nome*. \n ( ```E-mail e CPF``` ) \n\n ' +
                '\n-----------------------------------\n*️⃣ - ```CANCELAR AGENDAMENTO```'
            );
        } else {
            if (!menu[message]) {
                return `❌ *Código inválido, digite novamente!* \n\n ${order}`;
            }
        }

        storage[from].itens.push(menu[message]);

        return (
            `✅ *${menu[message].description}* Agendado com sucesso! \n\n` +
            '```Digite outra opção```: \n\n' +
            order
        );
    },
};