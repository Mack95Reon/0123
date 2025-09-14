function formatTime(ms) {
  const total = Math.max(0, Math.floor(ms));
  const hh = Math.floor(total / 3_600_000);
  const mm = Math.floor((total % 3_600_000) / 60_000);
  const ss = Math.floor((total % 60_000) / 1_000);
  const hhnd = Math.floor((total % 1_000) / 10);
  return {
    hhStr: String(hh).padStart(2,"0"),
    mmStr: String(mm).padStart(2,"0"),
    ssStr: String(ss).padStart(2,"0"),
    hsStr: String(hhnd).padStart(2,"0"),
  };
}

class Stopwatch {
  constructor(updateCb){
    this.running=false;
    this._start=0;
    this._acc=0;
    this._raf=null;
    this._cb=updateCb;
  }
  get elapsed(){ return this.running ? this._acc+(performance.now()-this._start) : this._acc; }
  start(){
    if(this.running) return;
    this.running=true; this._start=performance.now();
    const loop=()=>{
      if(!this.running) return;
      this._cb(this.elapsed);
      this._raf=requestAnimationFrame(loop);
    };
    this._raf=requestAnimationFrame(loop);
  }
  pause(){
    if(!this.running) return;
    this._acc+=performance.now()-this._start;
    this.running=false;
    cancelAnimationFrame(this._raf);
    this._cb(this.elapsed);
  }
  reset(){
    this.running=false;
    this._start=0; this._acc=0;
    cancelAnimationFrame(this._raf);
    this._cb(0);
  }
}

(function(){
  const elH=document.getElementById("hours");
  const elM=document.getElementById("minutes");
  const elS=document.getElementById("seconds");
  const elMs=document.getElementById("millis");
  const startBtn=document.getElementById("startPauseBtn");
  const lapBtn=document.getElementById("lapBtn");
  const resetBtn=document.getElementById("resetBtn");
  const laps=document.getElementById("laps");
  const tpl=document.getElementById("lapRowTemplate");

  const update=(ms)=>{
    const {hhStr,mmStr,ssStr,hsStr}=formatTime(ms);
    elH.textContent=hhStr;
    elM.textContent=mmStr;
    elS.textContent=ssStr;
    elMs.textContent=hsStr;
  };
  const sw=new Stopwatch(update);
  update(0);

  let lastLap=0;
  function addLap(){
    const now=sw.elapsed, split=now-lastLap;
    lastLap=now;
    const node=tpl.content.firstElementChild.cloneNode(true);
    node.querySelector(".lap-index").textContent=String(laps.children.length+1).padStart(2,"0");
    const totalFmt=formatTime(now), splitFmt=formatTime(split);
    node.querySelector(".lap-time").textContent=`${totalFmt.hhStr}:${totalFmt.mmStr}:${totalFmt.ssStr}.${totalFmt.hsStr}`;
    node.querySelector(".lap-split").textContent=`+${splitFmt.mmStr}:${splitFmt.ssStr}.${splitFmt.hsStr}`;
    laps.prepend(node);
  }

  startBtn.onclick=()=>{
    if(sw.running){
      sw.pause();
      startBtn.textContent="Start";
      lapBtn.disabled=true;
    } else {
      sw.start();
      startBtn.textContent="Pause";
      lapBtn.disabled=false;
      resetBtn.disabled=false;
    }
  };
  lapBtn.onclick=()=>{ if(sw.running) addLap(); };
  resetBtn.onclick=()=>{
    sw.reset(); update(0);
    startBtn.textContent="Start";
    lapBtn.disabled=true; resetBtn.disabled=true;
    laps.innerHTML=""; lastLap=0;
  };
})();