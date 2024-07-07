import "./App.css";
import Heading from "./com/heading.jsx";
import Sidebar from "./com/sidebar.jsx";
import Bottom from "./com/bottm.jsx";
import Form from "./com/form.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./com/card.jsx";
import { useState } from "react";
import About from "./com/About.jsx";
import List from "./com/lis.jsx";
import Login from "./com/login.jsx";
import PostListProvider from "./store/card-list-store.jsx";
function App() {
  const [tab, settab] = useState("");
  const [head, sethead] = useState("");
  const onhead = (a) => {
    sethead(a);
  };
  const onchange = (s) => {
    settab(s);
  };
  return (
    <PostListProvider>
      <div className="container">
        <Sidebar onchange={onchange} tab={tab}></Sidebar>
        <div className="Home">
          <Heading onhead={onhead}></Heading>
          {head == "login" && <Login></Login>}
          {head == "About" && <About></About>}
          {tab == "Home" && <List></List>}
          {tab == "Dashboard" && <Form></Form>}
          {tab == "Paramjeet" && <About></About>}
          {tab == "List" && <List></List>}
          <Bottom></Bottom>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
