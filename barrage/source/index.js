let data = [
    {value: '周杰伦的听妈妈的话，好好听！',time:5,color:'red',speed:1,fontSize:22},
    {value: '妈妈的话，好好听！',time:10,color:'red',speed:1,fontSize:18},
    {value: '周杰伦的听妈妈的话，好好听！',time:11,color:'blue',speed:1,fontSize:12},
    {value: '听妈妈的话，好好学习！',time:13,color:'#00a1f5',speed:1,fontSize:22},
    {value: '周杰伦的听妈妈的话，好好听！',time:5},
    {value: '听妈妈的话，不要早恋了！',time:20},
    {value: '周杰伦好帅！',time:15},
    {value: '周杰伦的听妈妈的话，好好听！',time:5,color:'red',speed:1,fontSize:22},
    {value: '妈妈的话，好好听！',time:10,color:'red',speed:1,fontSize:18},
    {value: '周杰伦的听妈妈的话，好好听！',time:11,color:'blue',speed:1,fontSize:12},
    {value: '听妈妈的话，好好学习！',time:13,color:'#00a1f5',speed:1,fontSize:22},
    {value: '周杰伦的听妈妈的话，好好听！',time:5},
    {value: '听妈妈的话，不要早恋了！',time:20},
    {value: '周杰伦好帅！',time:15}
  ]
  
  // 获取所有需要的dom结构
  let doc = document;
  let canvas = doc.getElementById('canvas');
  let video = doc.getElementById('video');
  let $txt = doc.getElementById('text');
  let $btn = doc.getElementById('btn');
  let $color = doc.getElementById('color');
  let $range = doc.getElementById('range');
  
  //创建一个CanvasBarrage的类
  class CanvasBarrage {
    constructor(canvas, video, opts={}) {
      // 如果canvas和video都没有传的话
      if (!canvas || !video) {
        return;
      }
  
      // 增加属性，挂载到this上
      this.video = video;
      this.canvas = canvas;
  
      this.canvas.width = video.width;
      this.canvas.height = video.height;
      // 获取画布
      this.ctx = canvas.getContext('2d');
  
      // 设置默认参数，如果没有传就用默认值
      let defOpts = {
        color: '#e91e63',
        speed: 1.5,
        opacity: 0.5,
        fontSize: 20,
        data: []
      };
  
      // 合并对象全部挂载到this实例上
      Object.assign(this, defOpts, opts);
      // 添加属性，用来判断播放状态，默认true是暂停
      this.isPaused = true;
      // 获取所有的弹幕消息
      this.barrages = this.data.map(item => new Barrage(item, this));
      // 渲染
      this.render();
    }
    // function render() {}
    render() {
      // 渲染的第一步是清除原来的画布
      this.clear();
      // 渲染弹幕
      this.randerBarrage();
      // 如果没有暂停的话就继续渲染
      if (this.isPaused === false) {
        requestAnimationFrame(this.render.bind(this));
      }
    }
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    randerBarrage() {
      // 要根据当前视频播放的时间和弹幕展示的时间做比较，来判断是否展示弹幕
      let time = this.video.currentTime;
  
      // 
      this.barrages.forEach(barrage => {
        // 只有在视频播放时间大于等于弹幕展示的时间，才做处理
        if (!barrage.flag && time >= barrage.time) {
          // 判断当前弹幕是否初始化了
          if (!barrage.isInit) {
            barrage.init();
            barrage.isInit = true
          }
  
          // 弹幕从右往左渲染，所以X坐标减去当前弹幕的speed
          barrage.x -= barrage.speed;
          barrage.render() // 渲染当前弹幕
  
          // 如果当前弹幕的x坐标比自身的宽度还小，就表示渲染结束了
          if (barrage.x < -barrage.width) {
            barrage.flag = true
          }
        }
      })
    }
        add(obj) {
        this.barrages.push(new Barrage(obj, this))
        }
  }
  // 创建Barrage类，用来实例化每一条弹幕
  class Barrage {
    constructor(obj, ctx) {
      this.value = obj.value
      this.time = obj.time
      // 把我的obj和ctx都挂载到this上，方便获取
      this.obj = obj
      this.context = ctx
    }
    // 初始化弹幕
    init() {
      // 如果数据里面没有涉及到下面4中参数，就取默认值
      this.color = this.obj.color || this.context.color
      this.speed = this.obj.speed || this.context.speed
      this.opacity = this.obj.opacity || this.context.opacity
      this.fontSize = this.obj.fontSize || this.context.fontSize
  
      // 为了计算每条弹幕的宽度，我们必须创建一个元素p，然后计算文字的宽度
      let p = document.createElement('p')
      p.style.fontSize = this.fontSize + 'px'
      p.innerHTML = this.value
      document.body.appendChild(p)
      this.width = p.clientWidth;
      document.body.removeChild(p)
  
      // 设置弹幕出现的位置
      this.x = this.context.canvas.width
      this.y = this.context.canvas.height * Math.random();
  
      // 做一下超出范围的处理
      if (this.y < this.fontSize) {
        this.y = this.fontSize;
      } else if (this.y > this.context.canvas.height - this.fontSize) {
        this.y = this.context.canvas.height - this.fontSize
      }
    }
    // 渲染每一条弹幕
    render() {
      // 设置画布文字和字体
      this.context.ctx.font = `${this.fontSize}px Arial`
      // 设置画布的文字颜色
      this.context.ctx.fillStyle = this.color;
      // 绘制文字
      this.context.ctx.fillText(this.value, this.x, this.y)
    }
  }
  
  let canvasBarrage = new CanvasBarrage(canvas, video, { data })
  // 设置video的play事件来调用CanvasBarrage实例的render方法
  video.addEventListener('play', () => {
    canvasBarrage.isPaused = false;
    canvasBarrage.render() //触发弹幕
  })
  // 发送弹幕的方法
function send() {
    let value = $txt.value;  // 输入的内容
    let time = video.currentTime; // 当前视频时间
    let color = $color.value;   // 选取的颜色值
    let fontSize = $range.value; // 选取的字号大小
    let obj = { value, time, color, fontSize };
    // 添加弹幕数据
    canvasBarrage.add(obj);
    $txt.value = ''; // 清空输入框
  }
  // 点击按钮发送弹幕
  $btn.addEventListener('click', send);
  // 回车发送弹幕
  $txt.addEventListener('keyup', e => {
    let key = e.keyCode;
    key === 13 && send();
  });