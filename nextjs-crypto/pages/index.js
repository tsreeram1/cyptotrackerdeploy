import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/SearchBar';
import coins from '../components/Coins';
import Coins from '../components/Coins';
import CoinList from '../components/Coins/CoinList';

export default function Home({gettingCoins}) {
  return (
    <div>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <SearchBar type='text' placeholder='search'/>
    <CoinList gettingCoins={gettingCoins}/>
    </div>
  )
}
// From docs
export async function getServerSideProps(context) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=2&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C1m`)

  const gettingCoins = await res.json()
  return{
    props: {
      gettingCoins
    }
  }
}
