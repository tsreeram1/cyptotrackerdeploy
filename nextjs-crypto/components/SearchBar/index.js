import styles from './Search.module.css'
const SearchBar = ({...rest}) => {
    return (
        <div className = {styles.our_search}>
            <input className = {styles.our_input}{...rest}/>
        </div>
    )
}

export default SearchBar
