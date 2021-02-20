import ChatMessage from "./components/TheMessageComponent.js"


(()  => {
    console.log('fired');

    const socket = io();

    function setUserId({sID, message}){

        vm.socketID = sID;
    }
    
    
    function appendMessage(message) {
        vm.messages.push(message);
        vm.$refs.message_sound.play();
    }

    const vm = new Vue ({
        data: {
            messages: [],
            nicknamme: "",
            username: "",
            socketID: "",
            message: ""
           
        

        },

        created: 
        
        function() {
            console.log('its alive!');

           
        },

        

        methods:{
            dispatchMessage(){
               // debugger;
                socket.emit('chatmessage', { content: this.message, name: this.nickname || "Anonymous"});
                this.message = "";
            }

            
        },

        components: {
            newmessage: ChatMessage
        }
    }).$mount("#app");

    socket.addEventListener("connected", setUserId);
  
    socket.addEventListener('message', appendMessage);
})();