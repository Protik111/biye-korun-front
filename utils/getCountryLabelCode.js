export function getCountryCodeByLabel(contryList, label) {
    const country = contryList.find(country => country.label === label);

    if (country) {
        return country.code;
    } else {
        return false;
    }
}

export function getStateCodeByLabel(stateList, label) {
    console.log('stateList, label from function', stateList, label);
    const state = stateList.find(state => state.label === label);

    console.log('state from function', state);

    if (state) {
        return state.code;
    } else {
        //todo
        return 'F'
        // return false;
    }
}