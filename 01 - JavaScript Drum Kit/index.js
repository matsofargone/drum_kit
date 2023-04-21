function removeTransition (e) {
    if (e.propertyName !== 'transform') return; //skip it)
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition));


// new way not deprecated 
const playSound = (e)=> {
    const keyEvent = `${e.code}`;
    const keys = document.querySelectorAll('.key');
    const audio = document.querySelector(`audio[id="${e.code}"]`);
    


    keys.forEach((key) => {
        if (keyEvent == key.id) {
            
            if(!audio) return;
            audio.currentTime = 0;
            audio.play();
            key.classList.add('playing');
        }
    })
}

window.addEventListener('keydown', playSound);





//depercated way
// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     console.log(audio)
//     if(!audio) return; //stop function from running
//     audio.currentTime = 0;
//     audio.play();
   

//     key.classList.add('playing');
// }




