export default function filterBoards(data, type) {

    const filterdArr = [...data];

    if(type === 'all'){
        return filteredArr;
    }else if(type === 'celebration'){
        return filterdArr.filter(board => board.type === 'celebration')
    }else if(type === 'thanks'){
        return filterdArr.filter(board => board.type === 'thank you')
    }else if(type === 'inspiration'){
        return filterdArr.filter(board => board.type === 'inspiration')
    }

    //Add recent filter

}