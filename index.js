const familyMembers = {
    placeholder:{
      name: '',
      photo: '',
      summary: '',
    },
    alan: {
      name: 'Alan',
      photo: './Images/AlanPhoto.jpeg',
      summary: 'Alan is a wonderful person. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    denisse: {
      name: 'Denisse',
      photo: './Images/DenissePhoto.jpeg',
      summary: 'Denisse is my older sister. She is studying computer science at Oregon State University and loves baby yoda. On her free time, she enjoys helping young students learn about STEM, playing pickleball, and baking. She decorates the Christmas tree every year, with Star Wars, Marvel, and sports ornaments!'
    },
    renzon: {
      name: 'Renzon',
      photo: './Images/RenzonPhoto.jpeg',
      summary: 'Alan is a wonderful person. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
                <h1>${selectedMemberData.name}</h1>
                <p>${selectedMemberData.summary}</p>
            </div>
        `;
    } else {
        familyDetailsContainer.innerHTML = '';
    }
}