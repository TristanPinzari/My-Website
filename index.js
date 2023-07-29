const navbar = document.querySelector('.navbar');
const homebutton = document.querySelector('.homebutton');
const projectsbutton = document.querySelector('.projectsbutton');
const contactbutton = document.querySelector('.contactbutton');
const container = document.querySelector('.container');
const homesection = document.querySelector('.homesection');
const projectssection = document.querySelector('.projectssection');
const contactsection = document.querySelector('.contactsection');
const typingdesc = document.querySelector('.typingdesc');
const typingeffect = document.querySelector('.typingeffect');
const discord = document.querySelector('.discord');
const github = document.querySelector('.github');

container.addEventListener('scroll', function() {
    const scrollPosition = container.scrollTop;

    if (scrollPosition > 0) {
     navbar.style.background = 'linear-gradient(90deg, #2b1055, #7597de)';
      navbar.style.opacity = '0.75';
      navbar.style.width = '600px';
    } else {
      navbar.style.background = 'transparent';
      navbar.style.width = '750px';
    }
})

homebutton.addEventListener("click", function() {
    homesection.scrollIntoView({ behavior: 'smooth' });
})

projectsbutton.addEventListener("click", function() {
    projectssection.scrollIntoView({ behavior: 'smooth' });
    
})

contactbutton.addEventListener("click", function() {
    contactsection.scrollIntoView({ behavior: 'smooth' });
})

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

const exitresume = document.querySelector('.exitbuttonresume');
const exittwitter = document.querySelector('.exitbuttontwitter');
const exitweather = document.querySelector('.exitbuttonweather');
const resumebutton =  document.querySelector('.projectnameresume');
const twitterbutton = document.querySelector('.projectnametwitter');
const weatherbutton = document.querySelector('.projectnameweather');

const shareresume = document.querySelector('.shareresume');
const sharetwitter = document.querySelector('.sharetwitter');
const shareweather = document.querySelector('.shareweather');

const background = document.querySelector('.backgroundblur')
const resume = document.querySelector('.projectresume')
const twitter = document.querySelector('.projecttwitter')
const weather = document.querySelector('.projectweather')

exitresume.addEventListener('click', function() {
    resume.style.display = 'none';
    background.style.display = 'none';
})

exittwitter.addEventListener('click', function() {
    twitter.style.display = 'none';
    background.style.display = 'none';
})

exitweather.addEventListener('click', function() {
    weather.style.display = 'none';
    background.style.display = 'none';
})

shareresume.addEventListener('click', function() {
    window.open('https://github.com/TristanPinzari/Resume-Parser', '_blank');
})

sharetwitter.addEventListener('click', function() {
    window.open('https://github.com/TristanPinzari/Twitter-Clone', '_blank');
})

shareweather.addEventListener('click', function() {
    window.open('https://github.com/TristanPinzari/Weather-App', '_blank');
})

resumebutton.addEventListener('click', function() {
    resume.style.display = 'flex';
    background.style.display = 'flex';
})

twitterbutton.addEventListener('click', function() {
    twitter.style.display = 'flex';
    background.style.display = 'flex';
})

weatherbutton.addEventListener('click', function() {
    weather.style.display = 'flex';
    background.style.display = 'flex';
})