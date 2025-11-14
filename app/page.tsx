'use client'

import { useState } from 'react'
import { Box, Card, TextField, Button, Typography, Divider, Grid, Stack } from '@mui/material'
import { sortearTimes } from './utils/sortearTimes'

export default function Home() {
  const [jogadores, setJogadores] = useState('')
  const [qtdTimes, setQtdTimes] = useState('')
  const [resultado, setResultado] = useState([])

  const handleSortear = () => {
    if (!jogadores || !qtdTimes) return
    const times = sortearTimes(jogadores, Number(qtdTimes))
    setResultado(times)
  }

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
      
      {/* HERO */}
      <Box sx={{ textAlign: 'center', mt: 4, mb: 8 }}>
        <Typography variant='h3' fontWeight='bold' mb={2}>
          Sorteador de Times Online
        </Typography>

        <Typography variant='h6' color='text.secondary'>
          Gere times equilibrados em segundos — simples, rápido e automático
        </Typography>
      </Box>

      {/* COMO FUNCIONA */}
      <Box sx={{ mb: 8 }}>
        <Typography variant='h4' fontWeight='bold' mb={3}>
          Como funciona?
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Você insere a lista de jogadores, escolhe quantos times deseja e pronto.
          O sistema embaralha automaticamente e distribui os jogadores de forma equilibrada.
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Ideal para futebol, basquete, vôlei, jogos online, competições e qualquer atividade
          em grupo onde você precise montar times rapidamente.
        </Typography>

        <Typography variant='body1'>
          O algoritmo garante que ninguém fique de fora e que os participantes sejam divididos
          da forma mais justa possível.
        </Typography>
      </Box>

      {/* BENEFÍCIOS */}
      <Box sx={{ mb: 8 }}>
        <Typography variant='h4' fontWeight='bold' mb={4}>
          Por que usar o sorteador?
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant='h6' fontWeight='bold' mb={1}>
                🎲 Sorteio Automático
              </Typography>
              <Typography variant='body2'>
                Nada de discutir quem vai com quem — o sistema decide pra você.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant='h6' fontWeight='bold' mb={1}>
                ⚡ Rápido e Fácil
              </Typography>
              <Typography variant='body2'>
                Em menos de 10 segundos seus times estão prontos.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant='h6' fontWeight='bold' mb={1}>
                🧩 Flexível
              </Typography>
              <Typography variant='body2'>
                Escolha quantos times quiser e quantos jogadores quiser.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant='h4' fontWeight='bold' mb={2}>
          Pronto para começar?
        </Typography>

        <Typography variant='body1' mb={3}>
          Preencha os dados abaixo e gere seus times imediatamente.
        </Typography>

        <Button variant='contained' size='large' onClick={() => window.scrollTo(0, 900)}>
          Começar agora
        </Button>
      </Box>

      {/* FORMULÁRIO */}
      <Card sx={{ p: 3, mb: 4 }}>
        <Typography variant='h5' fontWeight='bold' mb={3}>
          Gerar Times
        </Typography>

        <TextField
          label='Jogadores (um por linha)'
          multiline
          rows={6}
          fullWidth
          value={jogadores}
          onChange={e => setJogadores(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          label='Quantidade de times'
          type='number'
          fullWidth
          value={qtdTimes}
          onChange={e => setQtdTimes(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Button
          variant='contained'
          fullWidth
          size='large'
          onClick={handleSortear}
        >
          Sortear
        </Button>
      </Card>

      {/* RESULTADO */}
      {resultado.length > 0 && (
        <>
          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3}>
            {resultado.map((time, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 2 }}>
                  <Typography
                    variant='h6'
                    fontWeight='bold'
                    color='primary'
                    sx={{ mb: 1 }}
                  >
                    Time {index + 1}
                  </Typography>

                  {time.map((jogador, i) => (
                    <Typography key={i} sx={{ ml: 1, mb: 0.5 }}>
                      • {jogador}
                    </Typography>
                  ))}
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  )
}
