async function getInfo() {
    
    const stopNameElement = document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses');

    const stopId = document.getElementById('stopId').value;
    const BASE_URL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        timeTableElement.innerHTML = '';        
        const res = await fetch (BASE_URL);
        const data = await res.json();

        if (res.status !== 200) {
            throw new Error('StopId not found')
        }

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(bus => {
            const liItem = document.createElement('li');
            liItem.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
            timeTableElement.appendChild(liItem);
        });        

    }catch (error) {
        stopNameElement.textContent = 'Error';
    }
}

//Promises solution

function getInfo() {
    let submitBtn = document.getElementById('submit');
    let busList = document.getElementById('buses');
    let stop = document.getElementById('stopName');
 
    submitBtn.addEventListener('click', () => {
        let idVal = document.getElementById('stopId').value;
        let url = `http://localhost:3030/jsonstore/bus/businfo/${idVal}`;
 
 
        fetch(url)
            .then(data => data.json())
            .catch(err => {stop.textContent = 'Error'})
            .then(data => {
                stop.textContent = '';
                busList.innerHTML = '';
                stop.textContent = data.name;
                for (entry in data.buses) {
                    let listEl= document.createElement('li');
                    listEl.textContent = `Bus ${entry} arrives in ${data.buses[entry]} minutes`
                    busList.appendChild(listEl);
                }
 
            })
            // Not sure if this catch is needed, but want to make sure that we don't have invalid entry in bus.json
            .catch(err => {stop.textContent = 'Error'})
 
 
    })
}
