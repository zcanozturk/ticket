import TicketList from "../component/List/TicketList";
import { getNotAnswered } from "../helpers/api-util";
import { getTypes } from "../helpers/api-util";
import { Input, Select } from "antd";
import { useState } from "react";
import CardList from "../component/List/CardList";
const { Option } = Select;

const { Search } = Input;


function Admin(props) {
  const [arr, setArr] = useState(props.tickets);
  const [view, setView] = useState("Table");
  function tiklent(e) {
    const ar = [...props.tickets];
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
    console.log(array3);
    setArr(array3);
  }
  function changeView(val) {
    setView(val);
  }
  return (
    <div className="">
      <div className="ml-64 m-10 flex  ">
        <div className="">
          <Search onChange={tiklent} placeholder="search ticket"></Search>
        </div>

        <div>
          <Select
            onChange={changeView}
            placeholder="view Select"
            className="ml-20 w-40"
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
          <div className="ml-64 m-10"  >
            <CardList></CardList>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getNotAnswered();
  const types = await getTypes();

  return {
    props: {
      tickets: data,
      types: types,
    },
  };
}

export default Admin;
