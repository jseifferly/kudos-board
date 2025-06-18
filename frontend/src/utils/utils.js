export function filterBoards(data, type) {

    const filteredData = [...data]

    switch(type) {
    case 'all':
        return filteredData;
    case 'celebration':
        return filteredData.filter(board => board.type === 'Celebration')
    case 'thanks':
        return filteredData.filter(board => board.type === 'Thank You')
    case 'inspiration':
        return filteredData.filter(board => board.type === 'Inspiration')
    case 'recent':
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