import { Component } from 'react';
import {
  SearchbarHeader,
  Form,
  Button,
  ButtonLabel,
  Input,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
export default class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  changeQuery = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase().trim() });
  };

  formSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      // alert('Ваш запит не коректний');
      toast.warning('Enter data in the search field!');
      return;
    }
    this.props.onSubmit(this.state.searchQuery.trim().toLowerCase());

    this.resetInput();
  };

  resetInput = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <Form onSubmit={this.formSubmit}>
          <Button type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Неймовірний світ зображень"
            value={this.state.searchQuery}
            onChange={this.changeQuery}
          />
        </Form>
      </SearchbarHeader>
    );
  }
}
