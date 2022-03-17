import { Card } from "antd";
import Link from "next/link";

export default function CardList(props) {
  const { data, types } = props;

  function convertTypename(typeid) {
    const types = props.types;
    const typeelem = types.filter((type) => type.typeid === typeid);
    return typeelem[0].typename;
  }
  return (
    <div className="">
      {data.map((ticket) => (
        <div style={{paddingBottom:10}} className = "hover:drop-shadow-xl" key={ticket.typeid}>
          <Link href = {"/tickets/" +ticket.name} passHref>
          <Card className=""  title={ticket.name}>
            <p>{ticket.title}</p>
            <p>{convertTypename(ticket.typeid)}</p>
            <p>{ticket.description}</p>
          </Card>
        </Link>
        </div>
        
      ))}
    </div>
  );
}
