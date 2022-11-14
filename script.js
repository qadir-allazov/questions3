const btn_send = document.querySelector(".btn_send");
const name = document.querySelector(".name_auth");
const message = document.querySelector(".message_auth");
const history_show = document.querySelector(".show_history");
const history = document.querySelector(".history");

class Message {
  constructor(name, message) {
    this.name = name;
    this.date = new Date();
    this.message = message;
  }
  toString() {
    return `Gonderen: ${this.name}, Mesaj: ${
      this.message
    }, Vaxt: ${this.date.getHours()}:${this.date.getMinutes()}`;
  }
}
class Messenger {
  list = [];
  send(name, message) {
    let newmessage = new Message(name, message);
    this.list.push(newmessage);
  }
  show_history() {
    this.list.forEach((message) => {
      console.log(message.toString());
    });
  }
}
let messenger = new Messenger();

history_show.addEventListener("click", (e) => {
  let data = "";
  messenger.list.forEach((message_data) => {
    data += message_data.toString();
  });
  history.innerText = ` ${data}`;
});

btn_send.addEventListener("click", (e) => {
  if (name.value == "" || message.value == "") {
    alert("Inputlari doldurun");
  } else {
    messenger.send(name.value, message.value);
    name.value = "";
    message.value = "";
  }
});
