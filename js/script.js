
  document.querySelector('.burger-button').addEventListener('click', function(e) {
      e.preventDefault();  
      document.querySelector('.burgermenu').classList.toggle('burgermenu_active');
  });

  document.querySelector('.close').addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.burgermenu').classList.remove('burgermenu_active');
  });


document.getElementById('newestButton').addEventListener('click', function() {
  document.getElementById('newestContent').classList.add('active');
  document.getElementById('jackpotsContent').classList.remove('active');
  this.classList.add('active');
  document.getElementById('jackpotsButton').classList.remove('active');
});

document.getElementById('jackpotsButton').addEventListener('click', function() {
  document.getElementById('jackpotsContent').classList.add('active');
  document.getElementById('newestContent').classList.remove('active');
  this.classList.add('active');
  document.getElementById('newestButton').classList.remove('active');
});


  const emails = document.querySelectorAll('.winner .name span');
  emails.forEach(email => {
      let hiddenEmail = '***';
      const usernameLength = Math.floor(Math.random() * (8 - 5 + 1)) + 5;
      for (let i = 0; i < usernameLength; i++) {
          hiddenEmail += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
      hiddenEmail += '@';
      const domainLength = Math.floor(Math.random() * (4 - 3 + 1)) + 3;
      for (let i = 0; i < domainLength; i++) {
          hiddenEmail += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
      hiddenEmail += '.';
      const tldLength = Math.floor(Math.random() * (4 - 3 + 1)) + 3;
      for (let i = 0; i < tldLength; i++) {
          hiddenEmail += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }
      email.innerText = hiddenEmail;
  });




  const amounts = document.querySelectorAll('.winner .amount');
  amounts.forEach(amount => {
      const randomNumber = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
      amount.innerText = randomNumber + '$';
  });
  const jackpots = document.querySelectorAll('.winner .jackpot');
  jackpots.forEach(jackpot => {
      const randomNumber = Math.floor(Math.random() * (100000 - 10000 + 1)) + 100;
      jackpot.innerText = randomNumber + '$';
  });
