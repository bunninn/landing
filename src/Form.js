import React, { Component } from 'react';
import _ from 'lodash';

export default class Form extends Component {

  state = {
    email: '',
  }

  onSubmit = () => {
    const { email } = this.state;

    const baseURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdxjb1yE_Eiu0D0gLYxN60ZA1iWqjh6FSwCDvND0y0atQM6uQ/formResponse';
    const queryString = _
      .map({
        submit: 'Submit',
        'entry.1369838426': '指甲彩繪師',
        'entry.641511504': email,
      }, (value, key) => (`${key}=${encodeURIComponent(value)}`))
      .join('&');

    fetch(`${baseURL}?${queryString}`, { method: 'POST' });
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  render() {
    const { email } = this.state;

    return (
      <div>
        <label htmlFor="email">電子郵件（Email）</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={this.onEmailChange}
        />
        <button type="submit" onClick={this.onSubmit}>送出</button>
      </div>
    );
  }
}
