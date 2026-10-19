import {useState} from 'react'
import {flip,key,solved,atlas,commission,award} from './game'
import './App.css'
const titles=['First impressions','The blue hour','A little order','Turning a page','Golden threads','The master binding']
function readBest(){try{return Number(localStorage.getItem('ribbon-bindery-best'))||0}catch{return 0}}
let audio
function chime(enabled,win=false){
  if(!enabled)return
  try{audio??=new(window.AudioContext||window.webkitAudioContext)(); audio.resume(); [0,...(win?[.1,.2]:[])].forEach((delay,i)=>{const o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.value=(win?523:330)*Math.pow(1.25,i);g.gain.setValueAtTime(0,audio.currentTime+delay);g.gain.linearRampToValueAtTime(.08,audio.currentTime+delay+.015);g.gain.exponentialRampToValueAtTime(.001,audio.currentTime+delay+.25);o.connect(g);g.connect(audio.destination);o.start(audio.currentTime+delay);o.stop(audio.currentTime+delay+.26)})}catch{/* Sound is entirely optional. */}
}
export default function App(){
  const [job,setJob]=useState(()=>commission(0)),[round,setRound]=useState(0),[selected,setSelected]=useState(1)
  const [history,setHistory]=useState([]),[moves,setMoves]=useState(0),[hints,setHints]=useState(0)
  const [score,setScore]=useState(0),[best,setBest]=useState(readBest),[help,setHelp]=useState(true)
  const [sound,setSound]=useState(false),[done,setDone]=useState(false),[message,setMessage]=useState('Choose a ribbon. Flip it and everything above it.'),[version,setVersion]=useState(0)
  const stack=job.stack, won=solved(stack), earned=award(moves,job.par,hints), total=score+(won?earned:0)
  function perform(){
    if(won||done)return
    const next=flip(stack,selected), success=solved(next)
    setHistory([...history,stack]);setMoves(moves+1);setJob({...job,stack:next});setVersion(version+1)
    setMessage(success?'Beautifully bound. Every ribbon is in place.':`Turned the top ${selected}. Gold faces up, numbers in order.`)
    chime(sound,success)
    if(success){const result=score+award(moves+1,job.par,hints);if(result>best){setBest(result);try{localStorage.setItem('ribbon-bindery-best',String(result))}catch{/* Still playable without storage. */}}}
  }
  function next(){
    if(round===5){setDone(true);return}
    setScore(total);setRound(round+1);setJob(commission(round+1));setMoves(0);setHints(0);setHistory([]);setSelected(1);setMessage('New commission. Take your time — there is no clock.')
  }
  function restart(){setRound(0);setJob(commission(0));setMoves(0);setHints(0);setScore(0);setHistory([]);setDone(false);setSelected(1);setMessage('A fresh collection. Six commissions await.')}
  function hint(){const move=atlas(stack.length).map.get(key(stack)).move;setSelected(move);setHints(hints+1);setMessage(`Try flipping the top ${move}. This is a shortest-path move. Hint costs 25 points.`)}
  function undo(){if(!history.length||won)return;setJob({...job,stack:history.at(-1)});setHistory(history.slice(0,-1));setMessage('Last flip undone. The move still counts toward your score.');setVersion(version+1)}
  return <main>
    <header><a href="../" className="back">← THE DAILY COLLECTION</a><button className="sound" onClick={()=>setSound(!sound)} aria-label={sound?'Mute sound':'Enable sound'}>{sound?'♪ ON':'♪ OFF'}</button></header>
    <div className="brand"><div className="eyebrow">A POCKET PAPER PUZZLE · No. 004</div><h1>Ribbon <em>Bindery</em><span>✳</span></h1><p>A little twist. A lovely sense of order.</p></div>
    <section className="stats" aria-label="Game statistics"><div><small>COLLECTION</small><strong>{total}<i> pts</i></strong></div><div><small>PERSONAL BEST</small><strong>{best}<i> pts</i></strong></div><button onClick={()=>setHelp(true)} aria-label="How to play">?</button></section>
    {done?<section className="final"><div className="seal">✳</div><div className="eyebrow">SIX COMMISSIONS, ONE BEAUTIFUL EDITION</div><h2>{total>=1000?'Masterfully bound.':'Made with care.'}</h2><p>You earned <strong>{total} points</strong>.<br/>Every new collection brings a fresh set of folds.</p><button className="primary" onClick={restart}>Bind another collection ↗</button></section>:<>
    <section className="workbench">
      <div className="jobhead"><div><div className="eyebrow">COMMISSION {round+1} OF 6</div><h2>{titles[round]}</h2></div><span className="par">PAR <b>{job.par}</b></span></div>
      <div className="progress" aria-label={`Commission ${round+1} of 6`}>{titles.map((_,i)=><span key={i} className={i<=round?'filled':''}/>)}</div>
      <div className="target"><span>THE FINISHED BINDING</span><b>{stack.map((_,i)=>i+1).join(' · ')} <i>↑ all gold</i></b></div>
      <div className={'ribbons '+(won?'complete':'')} key={version} aria-label="Ribbon stack">
        {stack.map((v,i)=><button key={Math.abs(v)} className={`ribbon ${v>0?'front':'reverse'} ${!won&&i<selected?'chosen':''}`} disabled={won} onClick={()=>{setSelected(i+1);setMessage(`Ready to turn the top ${i+1} ribbon${i?'s':''}.`)}} aria-label={`Ribbon ${Math.abs(v)}, ${v>0?'gold front':'blue back'}. Select top ${i+1} ribbons.`} aria-pressed={!won&&i<selected}>
          <span className="number">{String(Math.abs(v)).padStart(2,'0')}</span><span className="thread"/><span className="face">{v>0?'↑ GOLD FRONT':'↓ BLUE BACK'}</span><span className="cut">{i===selected-1&&!won?'↶':'·'}</span>
        </button>)}
      </div>
      <div className="benchfoot"><span>{moves} flips{hints?` · ${hints} hints`:''}</span><span>{won?'✦ BINDING COMPLETE':`Top ${selected} selected`}</span></div>
    </section>
    <p className={'message '+(won?'success':'')} role="status">{message}</p>
    {won?<div className="winbar"><span>+{earned}<small>POINTS</small></span><button className="primary" onClick={next}>{round===5?'Finish collection':'Next commission'} ↗</button></div>:<><button className="primary flip" onClick={perform}>↶ Flip top {selected} ribbon{selected>1?'s':''}<small>Reverse the order · Turn the faces</small></button><div className="tools"><button onClick={undo} disabled={!history.length}>↩ Undo</button><button onClick={hint}>✧ Hint <small>−25 pts</small></button></div></>}
    </>}
    <footer><span>UNTIMED. HANDCRAFTED. YOURS.</span><button onClick={restart}>New collection</button></footer>
    {help&&<div className="veil" onClick={()=>setHelp(false)}><section role="dialog" aria-modal="true" aria-labelledby="help-title" className="help" onClick={e=>e.stopPropagation()}><div className="eyebrow">WELCOME TO THE BINDERY</div><h2 id="help-title">A fold changes everything.</h2><ol><li><strong>Put ribbons in order:</strong> 1 at the top, then 2, 3… with every gold front facing up.</li><li><strong>Tap any ribbon</strong> to select it and all the ribbons above it.</li><li><strong>Tap Flip.</strong> The selected bundle reverses order AND turns over: gold becomes blue, blue becomes gold. Even a single ribbon can flip.</li></ol><p>Six commissions. No timer, no move limit. Par is the fewest possible flips. Each job starts at 200 points; extra flips cost 15, hints cost 25, with a 40-point minimum. Undo does not erase spent flips. Best collection score saves on this device.</p><button autoFocus className="primary" onClick={()=>setHelp(false)}>Let's make something lovely</button></section></div>}
  </main>
}
