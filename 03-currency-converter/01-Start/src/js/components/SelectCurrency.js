import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  currencies: PropTypes.array.isRequired,
  onSelectCurrency: PropTypes.func.isRequired,
}

// Component that receives props
const SelectCurrency = ({currencies, onSelectCurrency}) => {
  const filteredCurencies = currencies.filter(currency => currency.code !== "AUD");

  return <select onChange={(e) => onSelectCurrency(e.target.value)}>
   {
     filteredCurencies.map(currency => {
       const {code, name} = currency;
       return <option key={code} value={code}>{name}</option>
     })
   }
 </select>
}

SelectCurrency.propTypes = propTypes;

export default SelectCurrency;
