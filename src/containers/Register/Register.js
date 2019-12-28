import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import EventInfo from './CRDetails/CRDetails';
import Aux from '../../hoc/Aux/Aux';

export default function register() {
  
  
  return (
    <Router>
      <HeaderSection />
    </Router>
  );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function HeaderSection() {
  let query = useQuery();

  return (
    <div>
      <div>
        <h2>Rally Registration</h2>
		    <EventInfo id={query.get("id")} />
        
      </div>
    </div>
  );
}

function Child({ id }) {
  return (
    <div>
      {id ? (
        <h3>
          The <code>name</code> in the query string is &quot;{id}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}
function LocationInfo({ id }) {
  return (
    <div>
      <div>
        <hr/>
		<div>Location Info</div>
		
		<div>We will display info about event { id }</div>
		
      </div>
    </div>
  );
}