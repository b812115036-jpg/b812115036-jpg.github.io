const translations = {
  zh: {navAbout:'關於',navWork:'事蹟',navContact:'聯絡',heroEyebrow:'TAIPEI · TAIWAN · EARTH',heroDescription:'把複雜的想法，做成讓人忍不住靠近的體驗。',heroCta:'開始對話',heroMore:'認識我',scroll:'向下探索',aboutLabel:'關於我',aboutTitle:'我相信好的設計，<br>是有溫度的科技。',aboutText:'嗨，我是蔡嘉恩（Aaron），一位游走於策略、設計與程式之間的創意工作者。過去 6 年，我和團隊一起把模糊的問題轉化為清晰、動人的數位產品。',factYears:'年創意實戰',factProjects:'個上線專案',factCuriosity:'份好奇心',interestLabel:'目前著迷於',workLabel:'精選事蹟',workTitle:'一些做過的，<br>值得分享的事。',workIntro:'每個專案都是一次重新提問的機會。',projectOne:'為城市的聲音，設計一座會呼吸的電台。',projectTwo:'讓每一口好食物，都有一段看得見的旅程。',projectThree:'將三百年的老街，放進新世代的口袋裡。',quote:'在變動得很快的世界裡，<br>保持感受，然後創造。',contactLabel:'聯絡我',contactKicker:'下一個有趣的想法，從一封信開始。',based:'基地 / 台北，台灣'},
  en: {navAbout:'ABOUT',navWork:'SELECTED WORK',navContact:'CONTACT',heroEyebrow:'TAIPEI · TAIWAN · EARTH',heroDescription:'Turning complex ideas into experiences people cannot help but approach.',heroCta:'START A CONVERSATION',heroMore:'GET TO KNOW ME',scroll:'SCROLL TO EXPLORE',aboutLabel:'ABOUT ME',aboutTitle:'I believe great design<br>is technology with a pulse.',aboutText:'Hi, I’m Aaron Tsai — a creative practitioner moving between strategy, design and code. For six years, I have helped teams transform fuzzy questions into clear, moving digital products.',factYears:'YEARS OF MAKING',factProjects:'LAUNCHED PROJECTS',factCuriosity:'PORTIONS OF CURIOSITY',interestLabel:'CURRENTLY OBSESSED WITH',workLabel:'SELECTED WORK',workTitle:'A few things made,<br>worth sharing.',workIntro:'Every project is a chance to ask a better question.',projectOne:'A radio station that lets the city’s voice breathe.',projectTwo:'Making every good bite traceable, beautifully.',projectThree:'Putting a 300-year-old street in a new generation’s pocket.',quote:'In a fast-moving world,<br>stay sensitive, then create.',contactLabel:'CONTACT',contactKicker:'The next interesting idea can begin with a hello.',based:'BASE / TAIPEI, TW'}
};
let lang = 'zh';
const langToggle = document.querySelector('#langToggle');
langToggle.addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => el.innerHTML = translations[lang][el.dataset.i18n]);
  langToggle.textContent = lang === 'zh' ? 'EN' : '繁中';
  if (window.gsap) gsap.fromTo('[data-i18n]', {opacity:.2, y:5}, {opacity:1, y:0, duration:.35, stagger:.015, ease:'power2.out'});
});
const themeToggle = document.querySelector('#themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  themeToggle.querySelector('.theme-icon').textContent = light ? '◐' : '☼';
  themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  localStorage.setItem('aaron-theme', light ? 'light' : 'dark');
});
if (localStorage.getItem('aaron-theme') === 'light') themeToggle.click();
document.addEventListener('mousemove', e => { const glow = document.querySelector('.cursor-glow'); glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; });
document.querySelectorAll('.magnetic').forEach(el => { el.addEventListener('mousemove', e => { const r = el.getBoundingClientRect(), x = (e.clientX-r.left-r.width/2)*.17, y=(e.clientY-r.top-r.height/2)*.25; el.style.transform=`translate(${x}px,${y}px)`; }); el.addEventListener('mouseleave', () => el.style.transform='translate(0,0)'); });
if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);
  const intro = gsap.timeline({defaults:{ease:'power4.out'}});
  intro.from('.site-header',{y:-40,opacity:0,duration:.8}).from('.reveal-word',{y:'120%',duration:1.15,stagger:.14},'-=.35').from('.hero .reveal',{y:25,opacity:0,stagger:.12,duration:.65},'-=.65').from('.hero-visual',{scale:.8,opacity:0,rotation:4,duration:1.1},'-=.85');
  gsap.utils.toArray('.split-text').forEach(el => gsap.from(el,{scrollTrigger:{trigger:el,start:'top 83%'},y:55,opacity:0,duration:1.05,ease:'power4.out'}));
  gsap.utils.toArray('.reveal').filter(el=>!el.closest('.hero')).forEach(el => gsap.from(el,{scrollTrigger:{trigger:el,start:'top 87%'},y:26,opacity:0,duration:.8,ease:'power3.out'}));
  gsap.utils.toArray('.reveal-card').forEach((el,i) => gsap.from(el,{scrollTrigger:{trigger:'.project-list',start:'top 78%'},y:70,opacity:0,duration:.9,delay:i*.14,ease:'power3.out'}));
  gsap.to('.portrait-card',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1},y:80,rotation:-5});
}
