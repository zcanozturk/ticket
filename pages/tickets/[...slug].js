import { useRouter } from "next/router";
import { getAllTickets } from "../../helpers/api-util";


function TicketPage(props){
    const router = useRouter();
    const sarah = router.query.slug
    console.log(router.query.slug)

    return(
        <div className="m-10 ml-64 h-screen">
            {props.ticket[sarah].description}
        </div>
    )

}

export async function getServerSideProps(context) {
  // const filePath = path.join(process.cwd(), "data", "backend.json");
  // const Jsondata = await fs.readFile(filePath);
  // const data = JSON.parse(Jsondata);
  const data = await getAllTickets();
  return {
    props: {
      ticket: data,
    },
  };
}

export default TicketPage;