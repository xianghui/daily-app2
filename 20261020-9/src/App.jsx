import {useState} from 'react'
import {treats,makeRound,evaluate,optimum} from './game'
import './App.css'
const key='picnic-treaty-best-v1'
const readBest=()=>{try{return Number(localStorage.getItem(key))||0}catch{return 0}}
let audio
function chime(high){try{audio??=new (window.AudioContext||window.webkitAudioContext)();audio.resume();const o=audio.createOscillator(),g=audio.createGain();o.connect(g);g.connect(audio.destination);o.frequency.setValueAtTime(high?660:380,audio.currentTime);o.frequency.exponentialRampToValueAtTime(high?990:480,audio.currentTime+.16);g.gain.setValueAtTime(.06,audio.currentTime);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+.24);o.start();o.stop(audio.currentTime+.25)}catch{}}
export default function App(){
 const [round,setRound]=useState(()=>makeRound(0)),[day,setDay]=useState(0),[mask,setMask]=useState(15),[served,setServed]=useState(false),[total,setTotal]=useState(0),[best,setBest]=useState(readBest),[sound,setSound]=useState(false),[help,setHelp]=useState(false),[perfect,setPerfect]=useState(0),[done,setDone]=useState(false)
 const result=evaluate(round,mask), ideal=optimum(round)
 const play=(high=false)=>{if(sound)chime(high)}
 function serve(){if(served||mask===0||mask===255)return;play(true);setServed(true);setTotal(v=>v+result.points);if(result.points===ideal)setPerfect(v=>v+1);if(day===5){setDone(true);const next=total+result.points;if(next>best){setBest(next);try{localStorage.setItem(key,String(next))}catch{}}}}
 function next(){setDay(d=>d+1);setRound(makeRound(day+1));setMask(15);setServed(false);play()}
 function restart(){setDay(0);setRound(makeRound(0));setMask(15);setServed(false);setTotal(0);setPerfect(0);setDone(false)}
 return <main>
  <header><a href="../" className="back">↖ THE GAME PANTRY</a><button className="sound" onClick={()=>{setSound(!sound);if(!sound)chime(false)}} aria-label={sound?'Mute sound':'Enable sound'}>{sound?'♫ ON':'♫ OFF'}</button></header>
  <section className="title"><div className="eyebrow">A LITTLE GAME OF FAIR SHARES</div><h1>Picnic <i>Treaty.</i></h1><p>You divide. Your guest decides.</p></section>
  <div className="stats"><div><small>PICNIC</small><strong>{day+1}<em> / 6</em></strong></div><div><small>YOUR POINTS</small><strong>{total}</strong></div><div><small>BEST VISIT</small><strong>{best}</strong></div></div>
  <div className="sectionline"><h2>The tasting notes</h2><button className="help" onClick={()=>setHelp(!help)} aria-expanded={help}>{help?'Close rules':'How to play ?'}</button></div>
  {help&&<aside className="rules"><strong>Make your half the happy half.</strong><p>Tap treats to move them between baskets A and B. The guest takes the basket worth more to them. You score the other basket, using your own tastes.</p><p>On a guest tie, they take the basket <b>you</b> value more. Both baskets need a treat. There is no timer. Serve six picnics; aim for six perfect splits!</p></aside>}
  <div className="tastes"><div className="taste-label"><span>TREAT</span><b>You</b><b>Guest</b></div>{treats.map((t,i)=><div className="taste" key={t.name}><span>{t.icon} {t.name}</span><b>{round.you[i]}</b><b>{round.guest[i]}</b></div>)}</div>
  <div className="sectionline"><h2>{done?'A lovely afternoon.':served?'The guest has chosen.':'Pack the picnic'}</h2><span className="mini">{served?'Bon appétit!':'Tap a treat to switch baskets'}</span></div>
  <div className="cloth"><div className="treat-grid">{round.items.map((t,i)=>{const a=!!(mask&(1<<i)), taken=served&&(a===result.takeA);return <button key={i} disabled={served} aria-label={`${treats[t].name}, basket ${a?'A':'B'}. Move to ${a?'B':'A'}`} aria-pressed={a} className={`treat ${a?'basket-a':'basket-b'} ${taken?'taken':''}`} style={{'--tint':treats[t].color}} onClick={()=>{setMask(mask^(1<<i));play()}}><span className="basket-tag">{a?'A':'B'}</span><span className="food">{treats[t].icon}</span><span className="food-name">{treats[t].name}</span></button>})}</div></div>
  <div className="baskets">{[true,false].map(a=><div key={String(a)} className={`basket-summary ${a?'a':'b'} ${served&&(a===result.takeA)?'guest-choice':''}`}><div><strong>Basket {a?'A':'B'}</strong><span>{served?(a===result.takeA?'GUEST TAKES':'YOURS TO ENJOY'):(a===result.takeA?'Guest would take this':'You would keep this')}</span></div><p><b>{a?result.ya:result.yb}</b> for you <span>·</span> <b>{a?result.ga:result.gb}</b> for guest</p></div>)}</div>
  <div className="feedback" role="status" aria-live="polite" key={`${day}-${served}`}>
   {served?<><strong>{result.points===ideal?'✦ A perfect treaty!':`+${result.points} points for your basket`}</strong><span>{result.points===ideal?`You found the best possible split: ${ideal} points.`:`Best possible: ${ideal}. You left ${ideal-result.points} points on the blanket.`}{done?` ${perfect}/6 perfect picnics.`:''}</span></>:<><strong>{mask===0||mask===255?'Put at least one treat in each basket':`Your forecast: ${result.points} points`}</strong><span>The guest chooses first. Can you improve your share?</span></>}
  </div>
  {done?<button className="primary" onClick={restart}>Another afternoon <span>↗</span></button>:served?<button className="primary" onClick={next}>Next picnic <span>→</span></button>:<button className="primary" onClick={serve} disabled={mask===0||mask===255}>Serve both baskets <span>→</span></button>}
  <footer><span>UNTIMED · MADE FOR SHARING</span><button onClick={restart}>Restart visit ↻</button></footer>
 </main>
}
