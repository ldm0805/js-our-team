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
    image: "angela-lopez-social-media-menager",
    },
    {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
    },
    {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer",
    },
]

console.log(member)

//  for(let i=0; i<member.length;i++){
//      let data_member = member[i];
//      console.log(`Il nome di questo membro è ${data_member.name}, il ruolo di questo membro è ${data_member.role}, la stringa della foto di questo membro è ${data_member.image}`);
//  }

let data_member = member;

for(let key in data_member){
    console.log(data_member[key])
}
