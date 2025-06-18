export async function filterBoards (data, type) {

    const BASE_URL = import.meta.env.VITE_BASE_URL
    const FILTER_URL = new URL(`boards/?type=${type}`,BASE_URL)

    if(type === 'all'){
        return await httpRequest(BASE_URL,"GET");
    }else if(type == 'recent') {
        const filteredData = await httpRequest(BASE_URL,"GET")
        .then(data => {
            data.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            return data.slice(0, Math.min(6, data.length));
        });
        return filteredData;
    }else {
        return await httpRequest(FILTER_URL, "GET");
    }
}

export function searchForSubstring(data, string) {

    const filteredData = [...data]
    return filteredData.filter(board => board.title.includes(string));
}

export function httpRequest(URL, method, data) {
    return fetch(URL, {method: method,
                headers: {
                    'Content-Type': 'application/json', // Indicate the data type
                },
                body: JSON.stringify(data), // Convert data to JSON string
                })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        return response.json(); // Parse JSON data from the response
    })
        .then(data => {
        // Handle successful response
        // Update UI or perform other actions with the data
        return data
    })
        .catch(error => {
        // Handle error
        console.error('Error fetching boards:', error);
        // Display an error message or retry the request
    });
}