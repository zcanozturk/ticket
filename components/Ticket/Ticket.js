import Reply from "./TicketReply";
import Answer from "./Answer";
import ReactHtmlParser from "react-html-parser";

export default function Ticket(props) {
  function convertTypename(typeid) {
    const types = props.ticket.types;
    const typeelem = types.find((type) => type.typeid === typeid);
    return typeelem.typename;
  }

  const { ticket } = props;
  return (
    <div className="divide-y-4 max-w-5xl ">
      <div className="divide-y-4">
        <div>
          <div className="">{ticket.ticket.name}</div>
          <br />
          <div>{convertTypename(ticket.ticket.typeid)}</div>
          <div>{ticket.ticket.title}</div>
          <br />
        </div>

        <div>{ReactHtmlParser(ticket.ticket.mail)}</div>
      </div>

      <div>
        <br />
        {ticket.answer === null ? (
          <Reply id={ticket.ticketid} />
        ) : (
          <Answer answer={ticket.answer} />
        )}
      </div>
    </div>
  );
}
