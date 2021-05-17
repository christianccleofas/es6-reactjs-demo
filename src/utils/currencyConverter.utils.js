import {api} from '../services/api';

export function convertToCurrency(curr, val) {
    const getCurrency = api.currency.response[curr];
    return (val / getCurrency.conversion).toFixed(2);
}