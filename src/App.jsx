import Card from "./components/Card";
import Header from "./components/Header";
import useFetchDeals from "./services/useFetch";
import ReactLoading from "react-loading";
const App = () => {
  const { deals, error } = useFetchDeals();

  console.log(deals);
  if (!deals) {
    return (
      <div style={{ marginLeft: "5rem" }}>
        <ReactLoading type={"cylon"} color={"black"} height={667} width={375} />
      </div>
    );
  }
  return (
    <div className="app">
      <Header />
      <nav>
        <button className="primary">Amazon</button>
        <button className="primary">eBay</button>
        <button className="primary">Aliexpress</button>
        <button className="primary">Etsy</button>
      </nav>
      <div>
        <h2>Hot Deals</h2>
        <div className="feed">
          {deals?.map((deal) => (
            <Card key={deal.pos} item={deal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
