// Get elements from the DOM
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');

// Song list with metadata
const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        file: 'music/song1.mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        file: 'music/song2.mp3'
    }
];

let currentSongIndex = 0;
let isPlaying = false;

// Load the current song
function loadSong(songIndex) {
    audio.src = songs[songIndex].file;
    songTitle.innerText = songs[songIndex].title;
    artistName.innerText = songs[songIndex].artist;
}

// Play or pause the music
function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerText = 'Play';
    } else {
        audio.play();
        playPauseBtn.innerText = 'Pause';
    }
    isPlaying = !isPlaying;
}

// Update the progress bar
function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
}

// Navigate to next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.innerText = 'Pause';
    isPlaying = true;
}

// Navigate to previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.innerText = 'Pause';
    isPlaying = true;
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
document.getElementById('next-btn').addEventListener('click', nextSong);
document.getElementById('prev-btn').addEventListener('click', prevSong);

// Load the first song on page load
loadSong(currentSongIndex);
