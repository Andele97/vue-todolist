const { createApp } = Vue;

createApp({
  data(){
      return{
        imgLogo: './assets/img/logo.png',
        errorString: '',
        newMessageString: '',
        tasks: [
              {
                text: 'Prendere la pappa di Mack',
                done: false
              },

                {
                    text: 'Apprendere Vue',
                    done: false   
                },

                {
                    text: 'fare il bucato',
                    done: true
                }
            ]
        }
    },
    methods: {
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done;
        },
        removeTask(index){
          console.log(index);
          this.errorString = '';

            if(this.tasks[index].done){
            //rimuovo la task
            this.tasks.splice(index, 1)
            }else{
                this.errorString = 'Attenzione! Non puoi eliminare una task se non l\'hai ancora completata'
            }
        },
        createTask(){

            this.errorString = '';

            if(this.newMessageString.length < 5){
                this.errorString = 'Attenzione! Il messaggio deve avere almeno 5 caratteri.'
            }else{
                const newTask = {
                    text: this.newMessageString,
                    done: false
                }
                this.tasks.unshift(newTask);
                this.newMessageString = '';
            }
        },
    },
    mounted(){
       
    }
}).mount('#app')