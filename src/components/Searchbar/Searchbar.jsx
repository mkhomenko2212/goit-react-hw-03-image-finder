import { Component } from "react"
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { SearchButton, SearchContainer, SearchForm, SearchInput } from "./Searchbar.styled";


export class SearchBar extends Component {
    state = {
        query: '',
    };
 handleNameChange = event => {
     this.setState({
         query: event.currentTarget.value.toLowerCase()
     });
    };
    
    handleSubmit = event => {
        const { query } = this.state;
        event.preventDefault();
        if (query.trim() === '') {
           return toast.error('Введите запрос');
        }
        this.props.onSubmit(query);
        this.setState({ query: '' });
    };

    
    render() {
        return (
            <SearchContainer>
            <SearchForm onSubmit={this.handleSubmit}>
                <SearchButton type="submit">
                   
                    Search
                </SearchButton>
                <SearchInput
                    type="text"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleNameChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"/>
                </SearchForm>
            </SearchContainer>
        );
    }
}


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};