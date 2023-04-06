function solve() {
    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn  = document.getElementById('arrive');

    let stop = {
        next: 'depot',
    }

    async function depart() {
        departBtn.setAttribute('disabled', true);
        const BASE_URL = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const response = await fetch (BASE_URL);
        stop = await response.json();
        label.textContent = `Next stop ${stop.name}`;
        arriveBtn.removeAttribute('disabled', true);
    }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`;
        departBtn.removeAttribute('disabled', true);
        arriveBtn.setAttribute('disabled', true);
    }

    return {
        depart,
        arrive
    };
}

let result = solve();