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

  const card_item_container = document.querySelector('.cards')

  //Bonus 2

  for(let i=0; i < member.length; i++){
    let data_member = member[i];
    let card_item = document.createElement('div')
    card_item.className = "card";
    card_item.innerHTML += `<img class="card-img-top" src="./img/${data_member.image}">
                           <div class="text">Nome: ${data_member.name} 
                           <div>Ruolo: ${data_member.role}</div></div>`;
    card_item_container.append(card_item);
}
