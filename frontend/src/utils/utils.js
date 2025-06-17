export default function filterBoards(data, type) {

    if(type === 'all'){
        return data;
    }else if(type === 'celebration'){
        return data.filter(board => board.type === 'Celebration')
    }else if(type === 'thanks'){
        return data.filter(board => board.type === 'Thank You')
    }else if(type === 'inspiration'){
        return data.filter(board => board.type === 'Inspiration')
    }

    //Add recent filter

}