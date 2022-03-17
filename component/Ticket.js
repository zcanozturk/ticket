import Reply from '../component/TicketReply'
import Answer from './Answer';

export default function Ticket(props) {
  function convertTypename(typeid){
    
    const types = props.ticket.types
    const typeelem = types.find(type => type.typeid === typeid)
    return typeelem.typename
  }

  const { ticket } = props;
  return (
    <div className="m-10 ml-64 h-screen">
      <div>
        <div className="">{ticket.ticket.name}</div>
        <br />
        <div>{convertTypename(ticket.ticket.typeid)}</div>
        <br />
        <div>{ticket.ticket.title}</div>
        <br />
        <div>{ticket.ticket.mail}</div>
      </div>
      <br />
      <br />

      <div>
        <br />
        {ticket.answer===null ? <Reply id = {ticket.ticketid} /> : <Answer  answer = {ticket.answer} />}
      </div>
    </div>
  );
}


