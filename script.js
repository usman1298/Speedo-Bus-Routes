const routes = [
    { routeNo: 1, from: 'Railway Station', to: 'Bhatti Chowk' },
    { routeNo: 2, from: 'Samanabad Mor', to: 'Bhatti Chowk' },
    { routeNo: 3, from: 'Railway Station', to: 'Shahdara Lari Adda' },
    { routeNo: 4, from: 'R.A. Bazar', to: 'Chungi Amar Sidhu' },
    { routeNo: 5, from: 'Shad Bagh Underpass', to: 'Bhatti Chowk' },
    { routeNo: 6, from: 'Babu Sabu', to: 'Raj Garh Chowk' },
    { routeNo: 7, from: 'Bagrian', to: 'Chungi Amar Sidhu' },
    { routeNo: 8, from: 'Doctor Hospital', to: 'Canal' },
    { routeNo: 9, from: 'Railway Station', to: 'Sham Nagar' },
    { routeNo: 10, from: 'Multan Chungi', to: 'Qartaba Chowk' },
    { routeNo: 11, from: 'Babu Sabu', to: 'Main Market Gulberg' },
    { routeNo: 12, from: 'R.A Bazar', to: 'Civil Secretariat' },
    { routeNo: 13, from: 'Bagrian', to: 'Kalma Chowk' },
    { routeNo: 14, from: 'R.A Bazar', to: 'Chungi Amar Sidhu' },
    { routeNo: 15, from: 'Qartba Chowk', to: 'Babu Sabu' },
    { routeNo: 16, from: 'Railway Station', to: 'Bhatti Chowk' },
    { routeNo: 17, from: 'Canal', to: 'Railway Station' },
    { routeNo: 18, from: 'Bhatti Chowk', to: 'Shimla Pahari' },
    { routeNo: 19, from: 'Main Market', to: 'Bhatti Chowk' },
    { routeNo: 20, from: 'Jain Mandar', to: 'Chowk Yateem Khana' },
    { routeNo: 21, from: 'Depot Chowk', to: 'Thokar Niaz Baig' },
    { routeNo: 22, from: 'Depot Chowk', to: 'Thokar Niaz Baig' },
    { routeNo: 23, from: 'Valencia', to: 'Thokar Niaz Baig' },
    { routeNo: 24, from: 'Multan Chungi', to: 'Ghazi Chowk' },
    { routeNo: 25, from: 'R.A Bazar', to: 'Railway Station' },
    { routeNo: 26, from: 'R.A Bazar', to: 'Daroghawala' },
    { routeNo: 27, from: 'BataPur', to: 'Daroghawala' },
    { routeNo: 28, from: 'Quaid e Azam Interchange', to: 'Airport' },
    { routeNo: 29, from: 'Niazi Interchange', to: 'Salamat Pura' },
    { routeNo: 30, from: 'Daroghawala', to: 'Airport' },
    { routeNo: 31, from: 'Daroghawala', to: 'Lari Adda' },
    { routeNo: 32, from: 'Shimla Pahari', to: 'Ek Moriya' },
    { routeNo: 33, from: 'Cooper Store', to: 'Mughalpura' },
    { routeNo: 34, from: 'Singhpura', to: 'Mughalpura' }
];


function populateDropdowns() {
    const startDropdown = document.getElementById('start');
    const endDropdown = document.getElementById('end');
    
    const stations = new Set();
    routes.forEach(route => {
        stations.add(route.from);
        stations.add(route.to);
    });

    stations.forEach(station => {
        const optionStart = document.createElement('option');
        optionStart.value = station;
        optionStart.textContent = station;
        startDropdown.appendChild(optionStart);

        const optionEnd = document.createElement('option');
        optionEnd.value = station;
        optionEnd.textContent = station;
        endDropdown.appendChild(optionEnd);
    });
}


function filterDestination() {
    const startPoint = document.getElementById('start').value;
    const endDropdown = document.getElementById('end');
    const allOptions = Array.from(endDropdown.options);

  
    allOptions.forEach(option => {
        option.disabled = false;
    });

   
    if (startPoint) {
        allOptions.forEach(option => {
            if (option.value === startPoint) {
                option.disabled = true;
            }
        });
    }

   
    if (endDropdown.value === startPoint) {
        endDropdown.value = "";
    }
}


function findRoute(event) {
    event.preventDefault();
    
    const startPoint = document.getElementById('start').value;
    const endPoint = document.getElementById('end').value;
    const resultDiv = document.getElementById('result');


    if (!startPoint) {
        resultDiv.textContent = 'Please select a starting point.';
        resultDiv.style.color = 'red';
        return;
    }
    if (!endPoint) {
        resultDiv.textContent = 'Please select a destination point.';
        resultDiv.style.color = 'red';
        return;
    }

    
    if (startPoint === endPoint) {
        resultDiv.textContent = 'Error: Starting point and destination cannot be the same.';
        resultDiv.style.color = 'red';
        return;
    }

    const foundRoutes = routes.filter(route => route.from === startPoint && route.to === endPoint);

    if (foundRoutes.length > 0) {
        resultDiv.textContent = `Bus Route Number # ${foundRoutes[0].routeNo} ${'from'} ${foundRoutes[0].from} ${'to'} ${foundRoutes[0].to}`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'No route found for the selected stations.';
        resultDiv.style.color = 'red';
    }
}


document.getElementById('route-form').addEventListener('submit', findRoute);
document.getElementById('start').addEventListener('change', filterDestination);

document.addEventListener('DOMContentLoaded', populateDropdowns);
