export function getCountryCodeByLabel(contryList, label) {
    const country = contryList.find(country => country.label === label);

    if (country) {
        return country.code;
    } else {
        return false;
    }
}

export function getStateCodeByLabel(stateList, label) {
    const state = stateList.find(state => state.label === label);

    if (state) {
        return state.code;
    } else {
        //todo
        return 'F'
        // return false;
    }
}