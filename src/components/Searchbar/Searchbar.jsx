import { Component } from "react"
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';


export class SearchBar extends Component {
    state = {
        query: '',
    };
 handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.query.trim() === '') {
            toast.error('Введите запрос');
            return;
        }
        this.props.onSubmit(this.state.query);
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