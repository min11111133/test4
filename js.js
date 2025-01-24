let nexBtn = document.querySelector('.next-btn');
let heroVideo = document.querySelector('.hero-video');

let videoList = ['test.mp4', 'test2.mp4', 'test3.mp4', 'test4.mp4'];

let i = 0;

nexBtn.addEventListener('click', () => {
    i += 1;

    heroVideo.src = videoList[i];

    if(i === 3){
        i = -1;
    }
})

auto = setInterval(() => {
    nexBtn.click();
}, 8500)


const nav = document.querySelector('.nav');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    nav.classList.toggle('active');
})
