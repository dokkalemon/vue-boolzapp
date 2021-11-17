/* 
//TODO: Milestone 1
Replica della grafica con la possibilità di avere messaggi 
scritti dall’utente (verdi) e dall’interlocutore (bianco) 
assegnando due classi CSS diverse.
Le icone non hanno funzionalità ma sono solo 
presentazionali.

Visualizzazione dinamica della lista contatti: tramite la 
direttiva v-for, visualizzare nome e immagine di ogni
 contatto


//TODO: Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
visualizzare tutti i messaggi relativi al contatto attivo all’interno
 del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


//TODO: Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte 
bassa e digitando “enter” il testo viene aggiunto al thread sopra,
 come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
l’utente riceverà un “ok” come risposta, che apparirà dopo 
1 secondo.
*/









/* Vue */
const app = new Vue({
    el: '#app',
    created() {
        //traduzione data
        dayjs.locale('it')
    },

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        activeChat: 0,
        messageInput: '',

        userMessage: [
            {
                text: 'certo grazie'
            },
            {
                text: 'va bene'
            },
            {
                text: 'Grazie infinite'
            },
            {
                text: 'A Domani'
            },
            {
                text: 'No domani ho la lezione di Boolean'
            },
            {
                text: 'Addio'
            },
            {
                text: 'Buonanotte'
            },
        ]




    },
    methods: {
        selectChat(index) {
            this.activeChat = index;   
        },

       

        addMessage() {
            if (this.messageInput !== '') {
                this.contacts[this.activeChat].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.messageInput,
                    status: 'sent'
                })
            };

            //clean input
            this.messageInput = '';

            //input focus
            this.$refs.input.focus();

            setTimeout(() => {
                this.contacts[this.activeChat].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.userMessage[this.numRandom()].text,
                    status: 'received',
                });
            }, 1000)
        },

        numRandom() {
            return Math.floor( Math.random() * this.userMessage.length)
        }
    }
}) 