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
    image: "angella-caroll-chief-editor.jpg",
    },
    {
    name: "Walter Gordon",
    role: "Office Menager",
    image: "walter-gordon-office-menager.jpg",
    },
    {
    name: "Angela Lopez",
    role: "Social Media Menager",
    image: "angela-lopez-social-media-menager.jpg",
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
for(let i=0; i<member.length;i++){
      let data_member = member[i];
      console.log(data_member.name)
      console.log(data_member.role)
      console.log(data_member.image)
  }

//Milestone 2
const card_item_container = document.querySelector('.cards')

let card_item;

for(let i=0; i < member.length; i++){
    card_item = document.createElement('div')
    let photo = document.createElement('div')
    card_item.innerText = `Nome: ${member[i].name} 
                           Ruolo: ${member[i].role} 
                           Tag immagine: ${member[i].image}`;
    
    card_item_container.append(card_item);
}
