// poem
var words=[
    '伤心桥下春波绿',
    '曾是惊鸿照影来',
    '当年明月在',
    '曾照彩云归',
    '归去来兮',
    '真堪偕隐',
    '画船听雨眠',
    '愿为江水',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '好想回到那个夏天',
    '我住长江头，君住长江尾',
    '山有木兮木有枝，心悦君兮君不知',
    '你曾是我灰色人生中的一道彩虹',
    '柳絮空缱绻',
    '南风知不知',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '三笑徒然当一痴',
    '人生若只如初见',
    '我余生中都是你',
    '人生自是有情痴',
    // '此恨不关风与月',
    // '理解是爱的另一个名字。',
    // '春蚕到死丝方尽',
    // '蜡炬成灰泪始干',
    // '今夜何夕',
    // '见此良人',
    // '愿我如星君如月',
    // '夜夜流光相皎洁',
    // '情不所起',
    // '一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '多情只有春庭月',
    '尤为离人照落花',
    '若有知音见采',
    '不辞唱遍阳春',
    '休言半纸无多重',
    '万斛离愁尽耐担',
    '夜月一帘幽梦',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '醉后不知天在水',
    '满船星梦压星河',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '夜深忽梦少年事',
    '唯梦闲人不梦君',
    '垆边人似月',
    '皓腕凝霜雪',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '得成比目何辞死，愿作鸳鸯不羡仙',
    '借问吹箫向紫烟，曾经学舞度芳年',
    '谁家玉笛藏彩蛋',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '沉香亭北倚阑干'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#baabda91';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
    let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');


      setTimeout(function(){
        textone.innerHTML = '『今夜、星は君の手の中にある。';
        texttwo.innerHTML = '　　今夜，群星在你的手中。　』';
        textthree.innerHTML = '      　　　 　　 --Aresene';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
      },14000)
      setTimeout(function(){
        textone.innerHTML = '于是我想起这样一句话：';
        texttwo.innerHTML = '​请允许我成为你的夏季';
        textthree.innerHTML = '当夏日飞逝而去时';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '一个小星空。';
        texttwo.innerHTML = '​虽然我不在你的身边，';
        textthree.innerHTML = '但请收下这份礼物。';
      },42000)
      setTimeout(function(){
        textone.innerHTML = '新年快乐，';
        texttwo.innerHTML = '​希望我们一切都好。';
        textthree.innerHTML = '情人节快乐。';
      },56000)
      setTimeout(function(){
        textone.innerHTML = '另，我藏了点彩蛋';
        texttwo.innerHTML = '​找到的人可以私发';
        textthree.innerHTML = '以获取神秘礼物！:)';
      },80000)
      setTimeout(function(){
        textone.innerHTML = '--Aresene Roelatriper';
        texttwo.innerHTML = 'Fin.';
        textthree.innerHTML = '想要更多？尝试修改域名吧！';
      },94000)

      function ScreenWidth() {      //获取屏幕尺寸，判断PC端或移动端
        if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
          alert("注意！手机端未做完美适配！请移步电脑以获得最佳体验！\n第一进入会有些卡，请等待并多次刷新！\n那么，请享受吧！");
          }
      }