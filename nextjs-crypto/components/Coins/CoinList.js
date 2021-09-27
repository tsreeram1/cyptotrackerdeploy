import Coins from "."

export default function CoinList({gettingCoins}) {
    return (
        <>
        {gettingCoins.map(coin =>{
            return(

             <Coins
            key={coin.id}
            name = {coin.name}
            id = {coin.id}
            price = {coin.current_price}
            symbol = {coin.symbol}
            market_cap = {coin.market_cap}
            volume = {coin.total_volume}
            image = {coin.image}
            market_cap_rank = {coin.market_cap_rank}
            pricechange24 = {coin.price_change_percentage_24h}
            percent_change_7d = {coin.price_change_percentage_7d_in_currency}
            
            /> 
            ); 
        })}
        </>
    );
}