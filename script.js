const reasons=[
["Because you somehow became my favourite notification. 📱💗","Rude, honestly. My phone used to have a peaceful life."],
["Because you willingly signed up for my nonsense. 😭","A questionable decision, but one I fully support."],
["Because you make it ridiculously easy for me to be soft.","You get a version of me not everyone gets. 🤍"],
["Because annoying you is genuinely one of my favourite hobbies.","And I have absolutely no plans to quit."],
["Because you're cute and unfortunately I have eyes. 👀","This is simply not my fault."],
["Because you make ordinary days feel a little more special.","Even from miles away."],
["Because I can be completely ridiculous around you.","And somehow still feel loved."],
["Because your attention is my favourite form of currency. 😌","Yes, I am accepting more deposits."],
["Because I love being your Darlo.","That one is simple. That's just home."],
["Because out of everyone, somehow I got you. 🥹","And I am very, very happy about that."]
];

let r=0, step=0;
const screens=[...document.querySelectorAll(".screen")];
const bar=document.getElementById("bar");

function show(n){
  screens.forEach((s,i)=>s.classList.toggle("active",i===n));
  step=n;
  bar.style.width=(n/(screens.length-1))*100+"%";
}

function next(){
  if(step===2){show(3);}
  else if(step<screens.length-1){show(step+1);}
}

function nextReason(){
  r++;
  if(r>=reasons.length){show(3);return;}
  renderReason();
}

function renderReason(){
  document.getElementById("reasonNo").textContent=r+1;
  document.getElementById("reason").textContent=reasons[r][0];
  document.getElementById("reasonSmall").textContent=reasons[r][1];
}

renderReason();
show(0);
