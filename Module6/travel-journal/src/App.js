import Header from './components/Header';
import data from "./db/data";

function App() {
    console.log(data);

    return (
        <div className="App">
            <Header />
        </div>
    );
}

export default App;



 // const cards = data.map((card) => {
  //   return <Card  
  //             location={card.location} 
  //             title={card.title} 
  //             date_enter={card.date_enter} 
  //             date_exit={card.date_exit}
  //             article_img={card.article_img}
  //             description={card.description}
  //           />;
  // });

        {/* {cards} */}