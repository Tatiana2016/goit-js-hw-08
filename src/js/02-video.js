
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const vimeoPlayer = new Player(iframe);

vimeoPlayer.on('timeupdate', throttle(function(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000));

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  vimeoPlayer.setCurrentTime(currentTime);
}

vimeoPlayer.on('play', function() {
  console.log('played the video!');
});
    