export function sortearTimes(jogadores: string, qtdTimes: number): string[][] {
  const lista = jogadores
    .split('\n')
    .map(j => j.trim())
    .filter(j => j !== '')

  const embaralhado = lista.sort(() => Math.random() - 0.5)

  const times: string[][] = Array.from({ length: qtdTimes }, () => [])

  let index = 0

  embaralhado.forEach(jogador => {
    times[index].push(jogador)
    index = (index + 1) % qtdTimes
  })

  return times
}
