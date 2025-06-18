export function filterBoards(data, type) {

    const filteredData = [...data]

    if(type === 'all'){
        return filteredData;
    }else if(type === 'celebration'){
        return filteredData.filter(board => board.type === 'Celebration')
    }else if(type === 'thanks'){
        return filteredData.filter(board => board.type === 'Thank You')
    }else if(type === 'inspiration'){
        return filteredData.filter(board => board.type === 'Inspiration')
    }else if(type == 'recent') {
        const sortedData = filteredData.sort((a,b) => {
            const dateA = new Date (a.date)
            const dateB = new Date (b.date)
            return dateA.getTime() - dateB.getTime();
        })
        return sortedData.slice(0, Math.min(6, data.length))
    }
}

export function searchForSubstring(data, string) {

    const filteredData = [...data]
    return filteredData.filter(board => board.title.includes(string));

}

export function httpRequest(URL) {
    return fetch(URL, {method: 'GET'})
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