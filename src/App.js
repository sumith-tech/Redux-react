import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

const App = () => {
  const isloggin = useSelector((state) => state.auth.isAuthenticated);
  console.log(isloggin);
  return (
    <Fragment>
      <Header />
      <Counter />
      {!isloggin && <Auth />}
    </Fragment>
  );
};

export default App;
