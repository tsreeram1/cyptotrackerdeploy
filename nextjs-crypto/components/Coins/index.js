import styles from './coins.module.css';

const Coins = ({name, symbol, price, market_cap, image, pricechange24, market_cap_rank, percent_change_7d, volume}) => {
    return (
        <div className={styles.coin_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src={image} alt={name} className={styles.coin_img} />
                     <h1 className={styles.coin_header}>{name}</h1>
                     <p className={styles.coin_sym}>{symbol}</p>
                </div>
                <div className={styles.coin_data}>
                    <p className={styles.coin_price}>${price}</p>
                    <p className={styles.coin_volume}>${volume.toLocaleString()}</p>

                    {percent_change_7d < 0 ? (
                        <p className={styles.coin_percent, styles.red}>
                            {percent_change_7d.toFixed(2)}%
                        </p>
                    ) : (
                        <p className={styles.coin_percent, styles.green}>
                            {percent_change_7d.toFixed(2)}%
                        </p>
                    )}
                    <p className={styles.coin_market_cap}>
                        Market cap: ${market_cap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>

    );
};
export default Coins;
