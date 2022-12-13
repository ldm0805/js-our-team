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

console.log(member)

let data_member = member;

for(let key in data_member){
    console.log(data_member[key])
}

const card_item_container = document.querySelector('.cards')
let card_item, container_card;
for(let i=0; i < member.length; i++){
    card_item = document.createElement('div')
    card_item.innerText = `Nome: : ${member[i].name} 
    Ruolo: : ${member[i].role} 
    Tag immagine: : ${member[i].image}`;
    card_item.classList.add('text')
    card_item_container.append(card_item);
}
