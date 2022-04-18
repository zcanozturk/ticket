



export  function Resolved(tickets){
    const list = tickets.filter(ticket => ticket.isAnswered == true)
    return list.length;

}
export function TicketLength(tickets){
    return tickets.length
}
export  function RespReplyAve(replies){
    var total = 0;
    replies.forEach(function(item, index) {
        total += item.resptime;
    });
    console.log(total)
    return total/replies.length
}