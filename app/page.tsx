'use client'

import { useState } from 'react'
import { Box, Card, TextField, Button, Typography, Divider, Grid } from '@mui/material'
import { sortearTimes } from './utils/sortearTimes'

export default function Home() {
  const [jogadores, setJogadores] = useState('')
  const [qtdTimes, setQtdTimes] = useState<number | ''>('')
  const [resultado, setResultado] = useState<string[][]>([])

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
        </Typography>

        <Typography variant='body1' sx={{ mb: 2 }}>
          Ideal para futebol, basquete, vôlei, jogos online, competições e muito mais.
        </Typography>

        <Typography variant='body1'>
          O algoritmo distribui automaticamente e garante equilíbrio.
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
                Chega de discussão — o sistema decide tudo.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant='h6' fontWeight='bold' mb={1}>
                ⚡ Rápido e Fácil
              </Typography>
              <Typography variant='body2'>
                Seus times prontos em segundos.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant='h6' fontWeight='bold' mb={1}>
                🧩 Flexível
              </Typography>
              <Typography variant='body2'>
                Escolha quantos times quiser.
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

      {/* FORM */}
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
          onChange={e => setQtdTimes(Number(e.target.value))}
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
