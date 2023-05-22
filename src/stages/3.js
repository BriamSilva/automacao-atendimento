import { storage } from '../storage.js';

export const stageThree = {
    async exec({ from, message, client }) {
        storage[from].address = message;
        storage[from].stage = 4;

        if (message === '*') {
            storage[from].stage = 0;
            return 'Agendamento *CANCELADO* com sucesso. \n Volte Sempre!';
        }

        let desserts = '';
        const itens = storage[from].itens;
        itens.map((item, index) => {
            if (index == itens.length - 1) {
                desserts += item.description + '.';
            } else {
                desserts += item.description + ', ';
            }
        });
        const total = storage[from].itens.length;

        await client.sendText(
            message.from,
            `🗒️ *RESUMO DO SEU AGENDAMENTO*: \n\n🧁 Procedimento: *${desserts}* \n🚚 Horario: *a confirmar*. \n📍 Endereço: *${message}* \n💰 Valor do procedimento: *${
        total * 6
      },00 reais*. \n⏳ Tempo de entrega: *50 minutos*. \n\n` +
            '🔊 ```Agora, informe a forma de pagamento, por gentileza.```'
        );

        return '✅ *Prontinho, agendamento feito!* \n\nAgora, se você ainda não sabe horario disponivel, vou te passar para um atendente para que ele verique o valor dos nossos *procedimentos*. \n\n⏳ *Aguarde um instante*.';
    },
};