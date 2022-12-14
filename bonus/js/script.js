//Creazione Array con le informazioni fornite
let member = [
    {
    name: "Wayne Barnett",
    role: "Founder & Ceo",
    image: "wayne-barnett-founder-ceo.jpg",
    },
    {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
    },
    {
    name: "Walter Gordon",
    role: "Office Menager",
    image: "walter-gordon-office-manager.jpg",
    },
    {
    name: "Angela Lopez",
    role: "Social Media Menager",
    image: "angela-lopez-social-media-manager.jpg",
    },
    {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
    },
    {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
    },
]

let data_member = member;

//Milestone 1

for(let i=0; i< member.length; i++){
      let data_member = member[i];
      console.log(data_member.name)
      console.log(data_member.role)
      console.log(data_member.image)
  }

//Milestone 2
const card_item_container = document.querySelector('.cards')

for(let i=0; i < member.length; i++){
    let card_item = document.createElement('div')
    card_item.className = "card";
    card_item.innerHTML = `<img class="card-img-top" src="./img/${member[i].image}">
                           <div class="text">Nome: ${member[i].name} 
                           <div>Ruolo: ${member[i].role}</div></div>`;
    card_item_container.append(card_item);
}
