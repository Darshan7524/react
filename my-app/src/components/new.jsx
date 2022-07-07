<Route path="/" render={() => <></>} />;

<Route
  path="/"
  render={() => (
    <>
      <h1>first line</h1>
      <p> I am learning react.js</p>
      <Helloworld text="react js is a javascript library"></Helloworld>
      <Byeworld text="reactjs is easy"></Byeworld>
      <button onClick={increment}>click here!</button>
      <h1>{counter}</h1>
    </>
  )}
/>;

const Home = () => {
  const [counter, setcounter] = useState(0);
  const increment = () => {
    setcounter(counter + 1);
  };
  console.log(counter);

  useEffect(() => {
    document.title = `clicked ${counter} times `;
  }, [counter]);

  return (
    <div>
      <h1>first line</h1>
      <p> I am learning react.js</p>
      <Helloworld text="react js is a javascript library"></Helloworld>
      <Byeworld text="reactjs is easy"></Byeworld>
      <button onClick={increment}>click here!</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default Home;
