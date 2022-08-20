import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PartyForm from '../components/PartyForm'
import PartyTable from '../components/PartyTable'
import PartyContext from '../contexts/PartyContext'

const Party = () => {
  const { partyIn, setPartyIn, dealer, setDealer, rounds, setRounds, players } =
    useContext(PartyContext)

  useEffect(
    () =>
      dealer !== undefined
        ? setDealer(dealer >= players.length - 1 ? 0 : dealer + 1)
        : undefined,
    [rounds]
  )

  return dealer === undefined ? (
    <>
      <p>Qui commence à distribuer ?</p>
      {players.map((player, index) => (
        <button
          key={player.id}
          className='px-4 py-2 bg-slate-800 w-64 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-green-600'
          onClick={() => setDealer(index)}
        >
          {player.name}
        </button>
      ))}
    </>
  ) : partyIn ? (
    <div className='flex flex-col items-center w-full'>
      <PartyTable rounds={rounds} players={players} dealer={dealer} />
      <PartyForm players={players} rounds={rounds} setRounds={setRounds} />
      <Link
        to='/finish'
        className='px-4 py-2 bg-slate-800 w-64 text-center rounded-xl m-auto text-slate-200 font-bold hover:text-red-600'
        onClick={() => setPartyIn(false)}
      >
        Terminer la partie
      </Link>
    </div>
  ) : (
    <p className='text-lg font-bold text-slate-200'>Aucune partie en cours</p>
  )
}

export default Party
