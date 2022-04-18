import { useRouter } from "next/router";
import { useState } from "react";
import Ticket from "../../components/Ticket/Ticket";
import {getAllTickets} from "../../helpers/getAllTickets"
import { getTypes } from "../../helpers/getTypes";
import {
  getAnswerById,
  getReplies,
  getTicketByName,
  getTicketIdByName,
} from "../../helpers/api-util";

function TicketPage(props) {
  const ticketid = props.ticketid;
  const replies = props.replies;
  const alltickets = props.alltickets;
  const answer = props.answer;
  const ticket = props.ticket;
  const types = props.types;
  return (
    <div className="m-10">
      <div>
      <Ticket ticket={props} />

      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const a = context.params.slug[0];
  const alltickets = await getAllTickets();
  const replies = await getReplies();
  const ticketid = await getTicketIdByName(a);
  const ticket = await getTicketByName(a, alltickets);
  const answer = ticket.isAnswered ? await getAnswerById(ticketid) : null;
  const types = await getTypes();
  return {
    props: {
      ticket: ticket,
      answer: answer,
      ticketid: ticketid,
      alltickets: alltickets,
      replies: replies,
      types: types,
    },
  };
}

export default TicketPage;
