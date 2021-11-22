import React, { Component } from 'react';

export default class Localcep extends Component {
  render() {
    const { cep: {
      address, cep, city, district, state
      }
    } = this.props;

    return (
    <>
      <tr>
        <th>{ `${ cep.replace(/^(\d{5})(\d)/,'$1-$2') }` }</th>
        <th>{ `${ address }` }</th>
        <th>{ `${ district }` }</th>
        <th>{ `${ city }` }</th>
        <th>{ `${ state }` }</th>
      </tr>
    </>
    );
  }
}