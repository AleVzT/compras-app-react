import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import logo from './../../assets/Logo_ML.png';

export const AppBar = () => {
 
    const [ formValues, handleInputChange ] = useForm({
        searchText: ''
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <nav className="appbar">
                <ul className="appbar__list">
                    <li className="appbar__list__item col-1">
                        <img
                            src={ logo } 
                            className="appbar__logo" 
                            alt={ "Logo" }
                        />
                    </li>
                    <li className="appbar__list__item col-9">
                        <form onSubmit={ handleSearch } className="appbar__forma">
                            <input 
                                type="text"
                                name="searchText"
                                autoComplete="off"
                                value={ searchText }
                                onChange={ handleInputChange }
                                className="form-control appbar__input" 
                                placeholder="Nunca dejes de buscar"
                            />
                            <Link to={`/items?search=${ searchText }`}>
                                <button 
                                    type="submit" 
                                    className="appbar__icon"
                                >
                                    <i className="fa fa-search"></i>
                                </button>
                            </Link>
                        </form>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
