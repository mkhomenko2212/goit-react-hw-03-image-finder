import { Component } from "react"
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';


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
            <form onSubmit={this.handleSubmit}>
                <button type="submit">
                   
                    Search
                </button>
                <input
                    type="text"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleNameChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"/>
            </form>
        );
    }
}


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};