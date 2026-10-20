export const FLOWERS = [
  { name: 'Peony', color: '#c56a83', symbol: '✿' },
  { name: 'Iris', color: '#7975b3', symbol: '❋' },
  { name: 'Daisy', color: '#c19135', symbol: '✽' },
  { name: 'Poppy', color: '#d77958', symbol: '✾' },
  { name: 'Aster', color: '#55897d', symbol: '❁' },
  { name: 'Lily', color: '#a46b9a', symbol: '✻' },
]
export function evaluate(orders, queue) {
  let time = 0, tips = 0
  const steps = queue.map(id => {
    const order = orders.find(o => o.id === id)
    time += order.duration
    const onTime = time <= order.deadline
    if (onTime) tips += order.value
    return { ...order, finish: time, onTime }
  })
  return { tips, time, steps }
}
export function optimal(orders) {
  let best = { tips: -1, queue: [] }
  function visit(queue, rest, time, tips) {
    if (!rest.length) {
      if (tips > best.tips) best = { tips, queue }
      return
    }
    for (const o of rest) {
      const finish = time + o.duration
      visit([...queue, o.id], rest.filter(x => x.id !== o.id), finish, tips + (finish <= o.deadline ? o.value : 0))
    }
  }
  visit([], orders, 0, 0)
  return best
}
export function makeRound(round, random = Math.random) {
  const n = round < 2 ? 4 : round < 4 ? 5 : 6
  for (let attempt = 0; attempt < 100; attempt++) {
    const orders = Array.from({ length: n }, (_, id) => ({
      ...FLOWERS[id], id, duration: 1 + Math.floor(random() * 5),
      deadline: 3 + Math.floor(random() * (n * 2)), value: 10 * (2 + Math.floor(random() * 6)),
    }))
    const best = optimal(orders)
    const total = orders.reduce((s, o) => s + o.value, 0)
    if (best.tips > total * .45 && best.tips < total && orders.every(o => o.duration <= o.deadline)) return orders
  }
  return FLOWERS.slice(0, n).map((f, id) => ({ ...f, id, duration: id % 3 + 2, deadline: id + 4, value: (id + 2) * 10 }))
}
export const roundScore = (tips, best) => Math.round(1000 * tips / best)
