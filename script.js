
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  
    const generatePasswordsBtn = document.getElementById("generate-passwords-btn");
    
    const firstPasswordPara = document.getElementById('first-password');
    const secondPasswordPara = document.getElementById('second-password');

    generatePasswordsBtn.addEventListener('click',generatePasswords);

    function generatePasswords(){
        firstPasswordPara.textContent = '';
        secondPasswordPara.textContent = '';
        for (let i = 0; i < 16; i++){
            firstPasswordPara.textContent += getRandomChar();
            secondPasswordPara.textContent += getRandomChar();
        }
    }
    
    function getRandomChar(){
        return characters[Math.floor(Math.random() * characters.length)];
    }
    



