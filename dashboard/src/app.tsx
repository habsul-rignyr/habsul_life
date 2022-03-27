import { Logo } from "./logo";
import Router from "preact-router";
import { Header, NavBar, VidPlayer, About } from "./components/componentsIndex";

export function App() {
  return (
    <>
      <NavBar />
      <div class="center pa3 ph5-ns">
        <Router>
          <VidPlayer path="/vidplayer" />
          <About path="/about" />
        </Router>
      </div>
    </>
  );
}
