const musicContainer = document.querySelector(".music-container")
const playBtn = document.querySelector("#play")
const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")
const audio = document.querySelector("#audio")
const progress = document.querySelector(".progress")
const progressContainer= document.querySelector(".progress-container")
const title = document.querySelector("#title")
const cover = document.querySelector("#cover")

const songs = ['hey','summer']
let songIndex = 1
loadsong(songs[songIndex])

function loadsong(song){
    title.textContent = song
    audio.src = `${song}.mp3`
    cover.src = `${song}.jpg`

}
function pauseSong(){
    
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    audio.pause()
    
}
function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play()

}
function prevsong(){
    songIndex--
    if(songIndex<0){
        songIndex = songs.length-1

    }

    loadsong(songs[songIndex])
    playSong()
}
function nextSong(){
    songIndex++
    if(songIndex>(songs.length-1)){
        songIndex  = 0

    }

    loadsong(songs[songIndex])
    playSong()
}
function updateProgress(e){
    // console.log(e.srcElement.currentTime)
    const {duration,currentTime}= e.srcElement
    const progresspercent = (currentTime/duration)*100
    progress.style.width = `${progresspercent}%`
}
function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX/width)*duration

}
playBtn.addEventListener('click',()=>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }
    else playSong()
})
prevBtn.addEventListener('click',prevsong)
nextBtn.addEventListener('click',nextSong)
audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click',setProgress)

audio.addEventListener('ended',nextSong)