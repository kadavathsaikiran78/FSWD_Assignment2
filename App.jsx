function App() {
  const name = "K. Sai Kiran";
  const today = new Date().toLocaleDateString();
  const a = 10;
  const b = 20;
  return (
    <div>
      <h1>My React Application</h1>
      <p>Name: {name}</p>
      <p>Today's Date: {today}</p>
      <p>Sum of {a} and {b} = {a + b}</p>
    </div>
  );
}
export default App;
