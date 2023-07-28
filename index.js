const homebutton = document.querySelector('.homebutton');
const projectsbutton = document.querySelector('.projectsbutton');
const contactbutton = document.querySelector('.contactbutton');
const homesection = document.querySelector('.homesection');
const projectssection = document.querySelector('.projectssection');
const contactsection = document.querySelector('.contactsection');
const typingdesc = document.querySelector('.typingdesc');
const typingeffect = document.querySelector('.typingeffect');
const discord = document.querySelector('.discord');
const github = document.querySelector('.github');

const wordsToAdd = ["Hackathon Logistics Executive", "Headstarter Fellow", "Full Stack Developer"];
let currentLength = typingdesc.textContent.length;
let currentWordIndex = 0;
let isRemoving = true;
let typing = true;

const intervalId = setInterval(function() {
    if (isRemoving==true) {
        if (currentLength >= 0) {
            typingdesc.textContent = typingdesc.textContent.slice(0, currentLength);
            currentLength--;
        } else {
            isRemoving = false;
            currentLength = 0;
        }
    } else {
        let currentWord = wordsToAdd[currentWordIndex];
        if (currentLength <= currentWord.length) {
            typingdesc.textContent = currentWord.slice(0, currentLength);
            currentLength++;
        } else {
            setTimeout(function() {
                currentWordIndex++;
                if (currentWordIndex >= wordsToAdd.length) {
                    currentWordIndex = 0;
                    isRemoving = true;
                } else {
                    isRemoving = true;
                    currentLength = typingdesc.textContent.length;
                }
            }, 3000);
        }
    }
}, 50);

discord.addEventListener("click", function() {
    window.open('https://discord.com/users/883814393463341096', '_blank');
});

github.addEventListener("click", function() {
    window.open('https://github.com/TristanPinzari', '_blank');
});

homebutton.addEventListener("click", function() {
    homesection.scrollIntoView({ behavior: 'smooth' });
})

projectsbutton.addEventListener("click", function() {
    projectssection.scrollIntoView({ behavior: 'smooth' });
})

contactbutton.addEventListener("click", function() {
    contactsection.scrollIntoView({ behavior: 'smooth' });
})