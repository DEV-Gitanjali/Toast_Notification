const button=document.getElementById('button')
const toasts=document.getElementById('toasts')
const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

button.addEventListener('click', ()=> creaNotification())

function creaNotification(Message=null,type=null){

    const notif=document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type:getRandomMessage())

    notif.innerText=Message ? messages : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
    
}


function getRandomMessage(){
    return messages[Math.floor(math.random() * messages.length)]

}


function getRandomMessage(){
    return messages[Math.floor(math.random() * messages.length)]
    
}
