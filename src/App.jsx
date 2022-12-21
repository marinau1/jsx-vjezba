
const App = () => {

let isNumber;
  return (
    <div>
      {isNumber % 2 === 0 && "Broj je paran"}
      {isNumber % 2 !== 0 && "Broj je neparan"}
    </div>
  );
}

export default App;
