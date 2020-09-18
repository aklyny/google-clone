import React,{useState} from 'react';
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import {actionTypes} from '../reducer'

const Search =({hideButtons=false})=>{
    const [text,setText] = useState('')
    const history = useHistory()
    const [{},dispatch] = useStateValue()
    const search = (e)=>{
        e.preventDefault();

        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:text
        })

        history.push('/search')
        setText('')   
    }
    return(
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input onChange={(e)=>setText(e.target.value)} value={text}/>
                <MicIcon />
            </div>
            {!hideButtons ?
               ( <div className="search__buttons">
                    <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>)
            :(
                <div className="search__buttons">
                    <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">Google Search</Button>
                    <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
                </div> 
            )
             }

        </form>
    )
}


export default Search;