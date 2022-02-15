document.getElementById('footer').style.margin = "auto";
document.getElementById('top-player-title').style.color = 'red';
document.getElementById('top-blog-title').style.color = 'green';
const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = "rgba(84, 46, 255, 0.5)";
}

document.getElementById('btn').addEventListener('click',function(){
    const createElement = document.createElement('li');
    createElement.innerText = 'New list added'
    const getParent = document.getElementById('all-list');
    getParent.appendChild(createElement);
})
let count = 0;
document.getElementById('press-button').addEventListener('click',function(){
    count ++;
    console.log(count);
    document.getElementById('input-text').value = count;
    if(count == 5){
        const getPressButton = document.getElementById('press-button');
        getPressButton.setAttribute('disabled',true);
    }
})