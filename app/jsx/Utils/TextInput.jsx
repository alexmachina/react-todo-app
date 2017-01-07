import React from 'react';
import ReactDOM from 'react-dom';

export class TextInput extends React.Component {
  constructor(props) {
    super(props);
    if(!props.value)
      this.state = { message: 'Field required' };
    else
      this.state = { message: ''};

  }

  onChange(event) {
    if(!this.props.validate(event.target.value)) {
      this.setState({ message: this.props.validationMessage });
    } else {
      this.setState({message: ''});
    }

    this.props.onChange(event);
  }

  render() {
    let message = <p className="validation-message">{this.state.message}</p>;
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" className="form-control"
          value={this.props.value} onChange={this.onChange.bind(this)} placeholder={this.props.placeholder} />
        {message}
      </div>

    )
  }
}
