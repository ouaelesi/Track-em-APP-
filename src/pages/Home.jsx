import logo from "../assets/logo.png";
function Home() {
  return (
    <div className="text-center grid grid-cols-12">
      <div className="col-span-2 bg-red-200">
        <img src={logo}></img>
      </div>
      <div className="col-span-9">ouael</div>
    </div>
  );
}

export default Home;
