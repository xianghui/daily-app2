import {useEffect,useRef,useState} from 'react'
import {cards,newGame,resolveBid,advance} from './game'
import './App.css'
const read=()=>{try{return JSON.parse(localStorage.getItem('velvet-bids-record'))||{best:0,wins:0,played:0}}catch{return {best:0,wins:0,played:0}}}
export default function App(){
 const [s,setS]=useState(newGame),[selected,setSelected]=useState(null),[record,setRecord]=useState(read),[help,setHelp]=useState(false),[sound,setSound]=useState(false)
 const audio=useRef(null),finished=s.round===8&&s.result
 function ping(win){if(!sound)return;try{const ctx=audio.current||(audio.current=new AudioContext());ctx.resume();[0,1,2].forEach((v)=>{const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+v*.08;o.type='sine';o.frequency.value=(win?440:220)*[1,1.25,1.5][v];g.gain.setValueAtTime(.08,t);g.gain.exponentialRampToValueAtTime(.001,t+.25);o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+.26)})}catch{/* Audio is optional */}}
 function bid(){if(selected==null||s.result)return;const next=resolveBid(s,selected);setS(next);ping(next.result.gain>0)}
 useEffect(()=>{if(!finished)return;setRecord(prev=>{const next={best:Math.max(prev.best,s.you),wins:prev.wins+(s.you>s.them?1:0),played:prev.played+1};try{localStorage.setItem('velvet-bids-record',JSON.stringify(next))}catch{/* Private browsing still playable */}return next})},[finished]) // Only the completed match writes a record.
 function restart(){setS(newGame());setSelected(null)}
 const r=s.result
 return <main>
  <header><a href="../" className="back" aria-label="Back to game gallery">↖ THE ARCADE</a><button className="icon" onClick={()=>setSound(!sound)} aria-pressed={sound}>Sound {sound?'on':'off'}</button></header>
  <div className="title"><p className="eyebrow">A LITTLE AUCTION. A BIG READ.</p><h1>Velvet <i>Bids</i><span>✦</span></h1><p>Nine cards. Nine treasures. Outfox the house.</p></div>
  <section className="scoreboard" aria-label="Scores"><div><small>YOU</small><strong>{s.you}<em> gems</em></strong></div><span>vs</span><div><small>THE HOUSE</small><strong>{s.them}<em> gems</em></strong></div></section>
  <section className="table">
   <div className="tablehead"><span>LOT {s.round+1} / 9</span><button className="textbutton" onClick={()=>setHelp(!help)} aria-expanded={help}>How to play {help?'−':'+'}</button></div>
   {help&&<div className="rules"><b>Win more gems than the house.</b> Tap a card, then seal your bid. Higher card wins the lot; both cards are spent. Ties carry the gems to the next lot (a final tie splits them). The house chooses without seeing your bid. Save your big cards for big prizes! No timer, no rush.</div>}
   <div className="treasure" key={s.round}><div className="gem">◆</div><div><span className="eyebrow">{s.pot?'ROLLOVER JACKPOT':'ON THE VELVET'}</span><h2>{s.lots[s.round]+s.pot} <i>gems</i></h2><p>{s.pot?`${s.lots[s.round]} + ${s.pot} carried over`:'The highest bid takes the treasure'}</p></div></div>
   <div className="upcoming"><span>NEXT</span>{s.lots.slice(s.round+1).map((n,i)=><span key={i} className="lotchip">{n}◆</span>)}{s.round===8&&<span>Last treasure · make it count</span>}</div>
  </section>
  <section className={'reveal '+(r?'shown':'')} aria-live="polite">
   {r?<><div className="duel"><span>You <b>{r.bid}</b></span><span>✦</span><span>House <b>{r.other}</b></span></div><h3>{r.tie?(r.last?'A shared final treasure':'A tie! The pot grows.'):r.gain?`Yours! +${r.gain} gems`:`The house takes ${r.loss} gems`}</h3><p>{r.tie?'Both bid cards are spent.':r.gain?'Beautifully played. Every card counts.':'A small sacrifice can set up a big finish.'}</p></>:<p className="whisper">✧ Pick your moment. Keep your best cards close.</p>}
  </section>
  {finished?<section className="final"><p className="eyebrow">THE VELVET SETTLES</p><h2>{s.you>s.them?'You outfoxed the house!':s.you===s.them?'An elegant draw.':'The house wins this time.'}</h2><p>{s.you} gems collected · Best {record.best}</p><button className="primary" onClick={restart}>Deal another night ↗</button></section>:<section className="handarea"><div className="handlabel"><h3>Your bidding cards</h3><span>{s.hand.length} left</span></div><div className="hand">{cards().map(n=><button key={n} className={'card '+(selected===n?'selected':'')} disabled={!s.hand.includes(n)||!!r} aria-label={`Bid ${n}`} aria-pressed={selected===n} onClick={()=>setSelected(n)}><small>✦</small><b>{n}</b><span>{s.hand.includes(n)?'BID':'USED'}</span></button>)}</div>{r?<button className="primary" onClick={()=>{setS(advance(s));setSelected(null)}}>Next treasure →</button>:<button className="primary" disabled={selected===null} onClick={bid}>{selected===null?'Choose a card above':`Seal bid · ${selected} ✦`}</button>}</section>}
  <details className="intel"><summary>House cards remaining · {s.rival.length}</summary><p>{s.rival.join(' · ')||'All cards played'}</p><p>The house values bigger lots, but sometimes bluffs.</p></details>
  {s.history.length>0&&<details className="intel"><summary>Auction ledger · {s.history.length} lots</summary>{s.history.map((h,i)=><p key={i}>#{i+1} · You {h.bid} / House {h.other} · {h.tie?'Tied':h.gain?`Won ${h.gain}◆`:`Lost ${h.loss}◆`}</p>)}</details>}
  <footer><span>BEST {record.best}◆ · WINS {record.wins}/{record.played}</span><button className="textbutton" onClick={restart}>New match ↻</button></footer>
 </main>
}
