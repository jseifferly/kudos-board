export async function filterBoards (type) {

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
    return filteredData.filter(board => board.title.toLowerCase().includes(string.toLowerCase()));
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

export function gifFetch(query) {

    const GIF_URL = 'https://api.giphy.com/v1/gifs/search'
    const GIF_API_KEY = import.meta.env.VITE_GIPHY_API_KEY

    const SEARCH_URL = new URL(`?api_key=${GIF_API_KEY}&q=${query}&limit=6`,GIF_URL);

    return fetch(SEARCH_URL)
        .then(response => {return response.json()})
        .then(data => {return data})
        .catch(error => console.error(error));
    
}