

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Comments from "components/Comments";
import CommentDetails from "components/CommentDetails";

export default function App() {



  return (
    <div>
      <Router>
        <nav className="top-navigation">
          <ul>
            <li>
              <Link to="/">Comments</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={ <Comments /> } />
          <Route path="/details/:id" element={ <CommentDetails /> } />
        </Routes>


      </Router>
    </div>

  );
}

