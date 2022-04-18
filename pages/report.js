import { getAllTickets } from "../helpers/getAllTickets";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";
import { Card } from "antd";
import { Resolved, RespReplyAve, TicketLength } from "../helpers/report-util";
import { useState,useEffect } from "react";
import { getReplies } from "../helpers/api-util";

function Report(props) {
  const { tickets,replies } = props;
  const [arr, setArr] = useState(tickets);
  const [rep, setRep] = useState(replies);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const filteredData = props.tickets.filter((ticket) => ticket.uid == user);
    const filteredRep = props.replies.filter(rep => rep.uid == user)
    setRep(filteredRep) 
    setArr(filteredData);

  }, [props]);

  return (
    <div className="m-10 ">
      <Card title="Report">
        <Card.Grid style={{}} hoverable={false}>{Resolved(arr)} ticket answered</Card.Grid>
        <Card.Grid hoverable={false}>Content</Card.Grid>
        <Card.Grid hoverable={false}>Content</Card.Grid>
        <Card.Grid style={{maxWidth: "600px",minWidth:"400px"}} hoverable={false}><VictoryLine /></Card.Grid>
        <Card.Grid style={{width: "210px"}} hoverable={false}>{TicketLength(arr) - Resolved(arr)} unresolved</Card.Grid>
        <Card.Grid hoverable={false}>{TicketLength(arr)} ticket total</Card.Grid>

        <Card.Grid hoverable={false}>{RespReplyAve(rep)}m average resp time </Card.Grid>


      </Card>
      
    </div>
  );
}

export default Report;

export async function getServerSideProps(context) {
  const data = await getAllTickets();
  const replies = await getReplies();
  return {
    props: {
      tickets: data,
      replies: replies
    },
  };
}
