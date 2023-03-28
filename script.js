const messageInput = document.querySelector('.chat-input input[type="text"]');
const sendButton = document.querySelector('.chat-input button');
const chatMessages = document.querySelector('.chat-messages');

sendButton.addEventListener('click', () => {
  sendMessage();
});

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
    const message = messageInput.value;
    if (!message.trim()) {
      return;
    }
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';
  
    const messageElement = `
      <div class="message sent">
        <p>${message}</p>
        <div class="info">
            <span class="delete">
                <img src="images/info.png" alt="">
            </span>
            <span class="time">${time}</span>
        </div>
      </div>
    `;
    chatMessages.innerHTML += messageElement;
    messageInput.value = '';
  
    
    
  
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Excluir';
    deleteButton.addEventListener('click', () => {
      chatMessages.removeChild(messageContainer);
    });
  
    messageContainer.innerHTML = messageElement;
    messageContainer.appendChild(deleteButton);

    messageInput.value = '';
 
  
    
}
