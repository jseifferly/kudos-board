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