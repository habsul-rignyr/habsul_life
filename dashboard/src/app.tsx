import { Logo } from "./logo";
import Router from "preact-router";
import {
  Header,
  NavBar,
  VidPlayer,
  About,
  Clock,
} from "./components/componentsIndex";

export function App() {
  return (
    <>
      <NavBar />
      <Clock />
      <div class="center pa3 ph5-ns">
        <Router>
          <VidPlayer path="/vidplayer" />
          <About path="/about" />
        </Router>
      </div>
    </>
  );
}
