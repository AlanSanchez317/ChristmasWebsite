const familyMembers = {
    placeholder:{
      name: '',
      photo: '',
      summary: '',
    },
    alan: {
      name: 'Alan',
      photo: './Images/AlanPhoto.jpeg',
      summary: 'Hello, Im Alan! Im the creator of this website! I am currently in West-Mec for the coding program. I love all things video games (mostly rhythm games), and I enjoy drawing and coding. I am the one that helps set up all the lights, decorations, and other items that make everything look nice!'
    },
    denisse: {
      name: 'Denisse',
      photo: './Images/DenissePhoto.jpeg',
      summary: 'Denisse is my older sister. She is studying computer science at Oregon State University and loves baby yoda. On her free time, she enjoys helping young students learn about STEM, playing pickleball, and baking. She decorates the Christmas tree every year, with Star Wars, Marvel, and sports ornaments!'
    },
    renzon: {
      name: 'Renzon',
      photo: './Images/RenzonPhoto.jpeg',
      summary: 'Renzon is my older brother, and the oldest sibling in the family. He works in photography, taking amazing photos, and is also a guitarist, a very good one at that! He comes over sometimes for the Holidays, wishing us holiday cheer.'
    },
    marvin: {
      name: 'Marvin',
      photo: './Images/MarvinPhoto.jpeg',
      summary: 'Alan is a wonderful person. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    claudia: {
      name: 'Claudia',
      photo: './Images/ClaudiaPhoto.jpg',
      summary: 'Alan is a wonderful person. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    bailey: {
        name: 'Bailey',
        photo: './Images/BaileyPhoto.jpeg',
        summary: 'Alan is a wonderful person. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  };
  
  function changeFamilyMember(selectedMember) {
    const familyDetailsContainer = document.getElementById('family-details');
    const selectedMemberData = familyMembers[selectedMember];

    if (selectedMemberData) {
        familyDetailsContainer.innerHTML = `
            <img src="${selectedMemberData.photo}" class="family-photo">
            <div class="family-summary">
                <h1 style="color: green;">${selectedMemberData.name}</h1>
                <p>${selectedMemberData.summary}</p>
            </div>
        `;
    } else {
        familyDetailsContainer.innerHTML = '';
    }
}