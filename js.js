let sounds = document.querySelectorAll("audio")
let cases = document.querySelectorAll("div.key")

console.log(sounds);

document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key == 'a'){
    sounds[0].play()
    cases[0].classList.add("playing")
}
    else if(e.key == 'z'){
    sounds[1].play()
    cases[1].classList.add("playing")
}
    else if(e.key == 'e'){
    sounds[2].play()
    cases[2].classList.add("playing")
}
    else if(e.key == 'q'){
    sounds[3].play()
    cases[3].classList.add("playing")
}
    else if(e.key == 's'){
    sounds[4].play()
    cases[4].classList.add("playing")
}
    else if(e.key == 'd'){
    sounds[5].play()
    cases[5].classList.add("playing")
}
    else if(e.key == 'w'){
    sounds[6].play()
    cases[6].classList.add("playing")
}
    else if(e.key == 'x'){
    sounds[7].play()
    cases[7].classList.add("playing")
}
    else if(e.key == 'c'){
    sounds[8].play()
    cases[8].classList.add("playing")
}
});

document.addEventListener("keyup", function(e){
    console.log(e.key);
    if(e.key == 'a'){
    cases[0].classList.remove("playing")
    }
    else if(e.key == 'z'){
    cases[1].classList.remove("playing")
}
    else if(e.key == 'e'){
    cases[2].classList.remove("playing")
}
    else if(e.key == 'q'){
    cases[3].classList.remove("playing")
}
    else if(e.key == 's'){
    cases[4].classList.remove("playing")
}
    else if(e.key == 'd'){
    cases[5].classList.remove("playing")
}
    else if(e.key == 'w'){
    cases[6].classList.remove("playing")
}
    else if(e.key == 'x'){
    cases[7].classList.remove("playing")
}
    else if(e.key == 'c'){
    cases[8].classList.remove("playing")
}
});


// let btn = document.querySelector("button");
// async function beatbox() {

//     let keyDownEvent = new KeyboardEvent('keydown', { key: 'a' });

//     let keyUpEvent = new KeyboardEvent('keyup', { key: 'a' });

//     document.dispatchEvent(keyDownEvent);

//     setTimeout(function () {
//     document.dispatchEvent(keyUpEvent);
//   }, 100);
// }
// btn.addEventListener('click', function () {

//   simulateKey();
// });
  


// a= new Promise((resolve, reject) => {
//     resolve(simulateKey(65)),
// },2000)


// asyncfunction beatbox(){}



let btn = document.querySelector("button");

async function BeatBox() {
    console.log('ppl');


    function SimulateKey(x) {

        let keyDownEvent = new KeyboardEvent('keydown', { key: x });

        let keyUpEvent = new KeyboardEvent('keyup', { key: x });

        document.dispatchEvent(keyDownEvent);

        setTimeout(function () {
            document.dispatchEvent(keyUpEvent);
        }, 1000);
    }

    function PlayBeat(x) {  
        // Créer et retourner un nouvelle promesses qui resolve SimulateKey
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(SimulateKey(x))
            },300)
            });


    }

    await PlayBeat("a");
    await PlayBeat("w");
    await PlayBeat("s");
    await PlayBeat("c");
    await PlayBeat("x");
    await PlayBeat("z");
    await PlayBeat("a");
    await PlayBeat("e");
    await PlayBeat("q");
    await PlayBeat("s");
    await PlayBeat("d");
    await PlayBeat("s");
    await PlayBeat("w");

}


btn.addEventListener('click', function () {
    BeatBox()
})