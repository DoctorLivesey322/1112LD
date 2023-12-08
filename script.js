function validateDateInput(dateString) {
   
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      alert('Neteisingas datos formatas. Pateikite YYYY-MM-DD formatu.');
      return false;
    }
  
   
    const currentDate = new Date();
    const inputDate = new Date(dateString);
    if (inputDate < currentDate) {
      alert('Negalima įvesti praeities datos.');
      return false;
    }
  
    return true;
  }
  
  function calculateDays() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const birthDateInput = document.getElementById('birthDate');
  
    const birthDateString = birthDateInput.value;
  
   
    if (!validateDateInput(birthDateString)) {
      return;
    }
  
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();
    const differenceInMilliseconds = birthDate - currentDate;
    const daysRemaining = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    let dayWord = 'dienų';
    if (Math.abs(daysRemaining) === 1) {
      dayWord = 'diena';
    }
  
    const resultMessage = `${firstName} ${lastName} liko ${Math.abs(daysRemaining)} ${dayWord} iki datos.`;
    document.getElementById('result').innerText = resultMessage;
  
    
    // const resultElement = document.getElementById('result');
    // if (Math.abs(daysRemaining) <= 1000) {
    //   resultElement.style.fontSize = '10px';
    // } else if (Math.abs(daysRemaining) <= 7000) {
    //   resultElement.style.fontSize = '16px';
    // } else {
    //   resultElement.style.fontSize = '20px';
    // }
  
  
  
    
    const inputsDiv = document.getElementById('inputs');
    const inputsList = document.createElement('ul');
    inputsList.innerHTML = `
      <li><strong>Vardas:</strong> ${firstName}</li>
      <li><strong>Pavardė:</strong> ${lastName}</li>
      <li><strong>Gimimo data:</strong> ${birthDateString}</li>
    `;
    inputsDiv.innerHTML = '';
    inputsDiv.appendChild(inputsList);
  }
  