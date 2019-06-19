const Event = require('events');
const Player = require('player');
const ev = new Event();
const request = require('./lib/request.js');
// ev.on('search')

['search', 'choose'].forEach(evName => {
  const fn = require(`./lib/${evName}`);
  ev.on(evName, async function(...args) {
    const res = await fn(...args);
    ev.emit('handle', evName, res, ...args);
  });
})
ev.on('afterSearch', (res, keyWord) => {
  if (!res.result || !res.result.songs) {
    console.log(`没有搜到${keyWord}的信息`);
    return false;
  }
  const songs = res.result.songs;
  ev.emit('choose', songs);
})
ev.on('afterChoose', async (selected, songs) => {
  // selected 1海阔天空 
  const selectSong = songs.find((song, i) => {
    return selected.song == `${i}${song.name}`
  })
  // console.log(selectSong);
  if(selectSong) {
    const { id } = selectSong;
    // 请求歌曲详情
    let url = 'http://neteasecloudmusicapi.zhaoboy.com/song/url?id=' + id;
    const songDetail = await request(url);
    console.log(songDetail);
    const { url: songUrl } = songDetail.data[0];
    const player = new Player(songUrl);
    player.play();
  }
})
ev.on('handle', (key, res, ...args) => {
  switch(key) {
    case 'search':
      return ev.emit('afterSearch', res, args[0]);
    case 'choose':
      return ev.emit('afterChoose', res, args[0])
  }
})
function main() {
  const argv = process.argv.slice(2);
  let keyWord = argv[0];
  ev.emit('search', keyWord);
}
main();