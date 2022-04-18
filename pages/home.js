import TicketList from "../components/List/TicketList";
import { getAllTickets } from "../helpers/getAllTickets";
import { getTypes } from "../helpers/getTypes.js";
import { Input, Select, Spin } from "antd";
import { useEffect, useState } from "react";
import CardList from "../components/List/CardList";

const { Option } = Select;

const { Search } = Input;

export default function Page(props) {
  const [arr, setArr] = useState(props.tickets);
  const [view, setView] = useState();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const filteredData = props.tickets.filter((ticket) => ticket.uid == user);

    setArr(filteredData);
  }, [props]);

  function tiklent(e) {
    const ar = [...arr];
    const filteredname = ar.filter((ticket) =>
      ticket.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const filteredtitle = ar.filter((ticket) =>
      ticket.title.toLowerCase().includes(e.target.value.toLowerCase())
    );

    const array3 = filteredname.concat(filteredtitle);
    array3 = array3.filter((item, index) => {
      return array3.indexOf(item) == index;
    });
    setArr(array3);
  }

  function changeView(val) {
    setView(val);
  }

  return (
    <div className="m-10 flex-col space-y-4 ">
      <div className=" flex justify-between ">
        <div className="">
          <Search onChange={tiklent} placeholder="search ticket"></Search>
        </div>

        <div>
          <Select
            onChange={changeView}
            placeholder="view Select"
            className=" w-40"
          >
            <Option value="Card"> Card - View</Option>
            <Option value="Table"> Table - View</Option>
          </Select>
        </div>
      </div>
      <div>
        {view === "Table" ? (
          <TicketList data={arr} types={props.types} />
        ) : (
          <div className="">
            <CardList data={arr} types={props.types} />
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await getAllTickets();
  const types = await getTypes();
  return {
    props: {
      tickets: data,
      types: types,
    },
  };
}
