import { useRef, useState } from 'react'
import { evaluate, makeRound, optimal, roundScore } from './game'
import './App.css'

function storedBest() { try { return Math.max(0, Number(localStorage.getItem('last-ferry-best')) || 0) } catch { return 0 } }
function Bouquet({ color, small = false }) {
  return <svg className={small ? 'bouquet small' : 'bouquet'} viewBox="0 0 100 110" aria-hidden="true">
    <path d="M25 48 L50 103 L75 48 L50 63 Z" fill="#e5cda3" stroke="#c3a879" strokeWidth="1.5"/>
    <path d="M50 88L30 25M50 88L51 17M50 88L72 29" stroke="#698675" strokeWidth="3"/>
    <path d="M48 69Q13 59 30 49Q46 46 48 69M54 61Q86 43 80 62Q70 72 54 70" fill="#759882"/>
    {[[30,30],[53,20],[73,36]].map(([x,y],i) => <g key={i} transform={`translate(${x} ${y})`}>
      {[0,60,120,180,240,300].map(a => <ellipse key={a} rx="7" ry="12" cy="-7" fill={color} transform={`rotate(${a})`} opacity=".95"/>)}
      <circle r="5" fill="#f8df91"/>
    </g>)}
    <path d="M37 81Q50 87 63 81M50 85Q28 75 36 91Q42 94 50 85Q72 76 64 91Q58 95 50 85L48 100" fill="none" stroke="#6c4b60" strokeWidth="3"/>
  </svg>
}
function App() {
  const [round, setRound] = useState(0)
  const [orders, setOrders] = useState(() => makeRound(0))
  const [queue, setQueue] = useState([])
  const [history, setHistory] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [best, setBest] = useState(storedBest)
  const [sound, setSound] = useState(false)
  const [help, setHelp] = useState(false)
  const [showOptimal, setShowOptimal] = useState(false)
  const audio = useRef(null)
  const result = evaluate(orders, queue)
  const solution = optimal(orders)
  const total = history.reduce((a,b) => a + b, 0)
  const done = submitted && round === 5
  const score = roundScore(result.tips, solution.tips)
  function tone(good = true) {
    if (!sound) return
    try {
      const Audio = window.AudioContext || window.webkitAudioContext
      audio.current ||= new Audio()
      const ctx = audio.current
      ctx.resume()
      const osc = ctx.createOscillator(), gain = ctx.createGain()
      osc.type = 'sine'; osc.frequency.setValueAtTime(good ? 660 : 330, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(good ? 880 : 220, ctx.currentTime + .12)
      gain.gain.setValueAtTime(.065, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .22)
      osc.connect(gain); gain.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + .23)
    } catch { /* Audio remains optional. */ }
  }
  function toggle(id) {
    if (submitted) return
    setQueue(q => q.includes(id) ? q.filter(x => x !== id) : [...q, id]); tone()
  }
  function dispatch() {
    if (submitted || queue.length !== orders.length) return
    setSubmitted(true); setHistory(h => [...h, score]); tone(score === 1000)
    const nextTotal = total + score
    if (round === 5 && nextTotal > best) {
      setBest(nextTotal)
      try { localStorage.setItem('last-ferry-best', String(nextTotal)) } catch { /* Private browsing still works. */ }
    }
  }
  function next() {
    setRound(r => r + 1); setOrders(makeRound(round + 1)); setQueue([]); setSubmitted(false); setShowOptimal(false)
  }
  function restart() {
    setRound(0); setOrders(makeRound(0)); setQueue([]); setHistory([]); setSubmitted(false); setShowOptimal(false)
  }
  return <main>
    <header className="topbar"><a href="../">← Game garden</a><div><button className="icon-btn" onClick={() => setHelp(!help)} aria-expanded={help}>How to play</button><button className="icon-btn sound" aria-pressed={sound} onClick={() => setSound(!sound)}>Sound {sound ? 'on' : 'off'}</button></div></header>
    <section className="masthead"><div><p className="eyebrow">THE HARBORSIDE FLOWER SHOP</p><h1>Last Ferry<br/><em>Florist</em><span className="star">✳</span></h1><p className="tagline">A little arrangement. A perfect departure.</p></div><Bouquet color="#c56a83"/></section>
    <div className="scorebar"><div><span>SHIFT</span><strong>{round + 1}<small> / 6</small></strong></div><div><span>SCORE</span><strong>{total.toLocaleString()}</strong></div><div><span>BEST SHIFT</span><strong>{best.toLocaleString()}</strong></div></div>
    {help && <section className="instructions"><h2>Your shop, your pace.</h2><p>Tap bouquet cards in the order you want to wrap them. Each takes a few minutes, and the clock starts at 0 for every departure. Finish <b>at or before</b> a bouquet’s ferry time to earn its tip. Late bouquets earn nothing.</p><p>Tap a queued card to remove it, then add it again to change the order. Sometimes sacrificing one small tip saves two bigger ones! Fill every slot, then dispatch. Each departure is worth up to 1,000 points, compared with the best possible arrangement.</p><p>No real timer. Six departures. New puzzles each shift. Play offline after one online visit.</p></section>}
    <section className="harbor"><div className="harbor-heading"><span>DEPARTURE {String(round + 1).padStart(2,'0')}</span><span>◷ No rush • untimed</span></div><svg viewBox="0 0 440 70" aria-hidden="true"><path d="M0 50Q35 40 70 50T140 50T210 50T280 50T350 50T440 50" fill="none" stroke="#a4beb8"/><path d="M260 43h110l-15 17h-75z" fill="#436c70"/><path d="M278 22h63v21h-63z" fill="#f5efe3" stroke="#436c70"/><path d="M294 22v-9h29v9" fill="none" stroke="#436c70"/><path d="M285 28h9v8h-9zm17 0h9v8h-9zm17 0h9v8h-9z" fill="#b1c9c2"/><path d="M40 20v36m27-24v24M25 36h67" stroke="#957b62" strokeWidth="4"/><circle cx="382" cy="14" r="9" fill="#edc47e"/></svg><p>Wrap in the right order.<br/><b>Catch the ferry. Keep the tips.</b></p></section>
    <section aria-label="Bouquet orders"><div className="section-heading"><h2>Today’s bouquets</h2><span>{queue.length}/{orders.length} queued</span></div><p className="section-note">Tap cards to queue. Tap again to take one out.</p><div className="orders">{orders.map(o => {
      const position = queue.indexOf(o.id), step = result.steps.find(s => s.id === o.id)
      return <button key={o.id} className={`order ${position >= 0 ? 'selected' : ''} ${submitted && !step?.onTime ? 'missed' : ''}`} style={{'--flower':o.color}} disabled={submitted} onClick={() => toggle(o.id)} aria-pressed={position >= 0} aria-label={`${o.name}, wrap ${o.duration} minutes, ferry ${o.deadline}, tip ${o.value}${position >= 0 ? `, queued ${position + 1}` : ''}`}>
        <div className="order-top"><span className="flower-symbol" aria-hidden="true">{o.symbol}</span><strong>{o.name}</strong><span className="position">{position >= 0 ? position + 1 : '+'}</span></div><div className="order-details"><span>Wrap <b>{o.duration}m</b></span><span>Ferry <b>{o.deadline}m</b></span><span className="tip">✦ {o.value}</span></div>
      </button>
    })}</div></section>
    <section className="workbench"><div className="section-heading"><h2>Your wrapping order</h2><span>Clock: {result.time}m</span></div><div className="timeline" aria-label="Wrapping queue">{orders.map((_,i) => {
      const step = result.steps[i]
      return step ? <button className={`slot filled ${step.onTime ? 'ontime' : 'late'}`} key={i} disabled={submitted} onClick={() => toggle(step.id)} aria-label={`Remove ${step.name}, finishes ${step.finish}, ${step.onTime ? 'on time' : 'late'}`}><span aria-hidden="true" style={{color:step.color}}>{step.symbol}</span><b>{step.finish}m</b><small>{step.onTime ? `+${step.value}` : 'late'}</small></button> : <div className="slot empty" key={i}><span>{i+1}</span><small>empty</small></div>
    })}</div><div className="bench-footer"><span>Projected tips <b>✦ {result.tips}</b></span><div><button disabled={!queue.length || submitted} onClick={() => { setQueue(q => q.slice(0,-1)); tone(false) }}>Undo</button><button disabled={!queue.length || submitted} onClick={() => setQueue([])}>Clear</button></div></div><p className="queue-note">{queue.length ? 'Green = on time · Dashed rose = misses the boat' : 'Your clock only moves as you add bouquets.'}</p></section>
    {!submitted ? <button className="primary" onClick={dispatch} disabled={queue.length !== orders.length}>Dispatch bouquets <span>→</span></button> : <section className="result" aria-live="polite"><p className="eyebrow">{done ? 'THE SHOP IS CLOSED. BEAUTIFULLY DONE.' : score === 1000 ? 'A PERFECT DEPARTURE' : 'THE FERRY IS AWAY'}</p><h2>{done ? `${total.toLocaleString()} / 6,000` : `+${score.toLocaleString()} points`}</h2><p>You earned <b>{result.tips}</b> tips. Best possible: <b>{solution.tips}</b>.{score === 1000 ? ' Every choice paid off.' : ' A different order could save more tips.'}</p><button className="solution-toggle" onClick={() => setShowOptimal(!showOptimal)} aria-expanded={showOptimal}>{showOptimal ? 'Hide' : 'See'} one best arrangement</button>{showOptimal && <div className="solution">{evaluate(orders, solution.queue).steps.map(s => <div key={s.id}><span>{s.name} → {s.finish}m</span><b>{s.onTime ? `+${s.value}` : 'late · 0'}</b></div>)}</div>}{done && <p className="final-note">{total === 6000 ? 'Master florist. Every departure was optimal.' : total >= 5000 ? 'A wonderful shift. The harbor is in bloom.' : 'A fresh tide brings a fresh chance. Try another shift!'}{total >= best && total > 0 ? ' Personal best matched or improved!' : ''}</p>}<button className="primary" onClick={done ? restart : next}>{done ? 'Open a fresh shift' : 'Next departure'} <span>→</span></button></section>}
    <footer><span>✿ A pocket-sized pause by the sea.</span>{!done && <button onClick={restart}>Restart shift</button>}</footer>
  </main>
}
export default App
