import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga";

import { GlobalStyle } from "./globalStyles";
import LoadingPage from "./pages/loading";
import ScrollToTop from "./components/Common/ScrollToTop";
import Navbar from "./components/Common/Navbar";
import BGMplayer from "./components/Common/BGMplayer";

const Homepage = lazy(() => import("./pages/index"));
const Prologue = lazy(() => import("./pages/prologue"));
const Chapter1 = lazy(() => import("./pages/chp1"));
const Chapter2 = lazy(() => import("./pages/chp2"));
const Chapter3 = lazy(() => import("./pages/chp3"));

function App() {
  useEffect(() => {
    Aos.init({
      mirror: false,
    });

    ReactGA.initialize("UA-*********-*"); // Google Analytics 추적 ID
    // 페이지 뷰 리포트
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <BGMplayer />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/prologue" component={Prologue} />
          <Route exact path="/chp1" component={Chapter1} />
          <Route exact path="/chp2" component={Chapter2} />
          <Route exact path="/chp3" component={Chapter3} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
