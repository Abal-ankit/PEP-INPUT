import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {
  Home,
  About,
  Convert,
  Bootstrap,
  ReactBootstrap,
  Axios,
  FetchResources,
  Header,
  Footer,
  Parent,
  Interest,
  Hook,
  UseEffectHook,
  ShoppingCart,
  BasicEvents,
  KnowYourself,
  BarChart,
  Visual,
  Context,
  AdminGreeting,
  UserGreeting,
  Greeting,
  FocusInputUseRef,
  PreviousValueUseRef,
  FormUseRef,
  ConditionalRendering,
  SignUpWithFormik,
  Assignment,
  Blog,
  Post,
  HookExample
} from "./Head";



function App() {
  return (
    //  <Router>
    //   <nav>
    //     <Link to='/'>Home</Link> | <Link to='about'>About Us</Link> | <Link to='blog'>Blog</Link>
    //   </nav>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //     <Route path='/blog' element={<Blog />}>
    //       <Route path=':postID' element={<Post />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <div className="App">
      {/* <Header />
      <Parent />
      <Footer /> */}
      {/* <Hook /> */}
      {/* <Interest /> */}
      {/* <UseEffectHook /> */}
      {/* <ShoppingCart /> */}
      {/* <BasicEvents /> */}
      {/* <KnowYourself /> */}
      {/* <BarChart /> */}
      {/* <Visual /> */}
      {/* <Context /> */}
      {/* <Greeting /> */}
      {/* <AdminGreeting />
      <UserGreeting /> */}
      {/* <Convert /> */}
      {/* <Bootstrap /> */}
      {/* <ReactBootstrap /> */}
      {/* <FetchResources /> */}
      {/* <Axios /> */}
      {/* <FocusInputUseRef /> */}
      {/* <PreviousValueUseRef /> */}
      {/* <FormUseRef /> */}
      {/* <ConditionalRendering /> */}
      {/* <SignUpWithFormik /> */}
      {/* <Assignment /> */}
      <HookExample />
    </div>
  );
}

export default App;
