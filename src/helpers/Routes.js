import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Students from '../views/Students';
import SingleStudent from '../views/SingleStudent';
import AddStudent from '../views/AddStudent';
import NotFound from '../views/NotFound';
// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

const StudentRoute = ({ component: Component, user, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (burrito) => (user
    ? (<Component {...burrito} user={user} />)
    : (<Redirect to={{ pathname: '/not-found', state: { from: burrito.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func
  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

StudentRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
export default function Routes({
  students,
  setStudents,
  user
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user} /> } />
        <Route exact path='/not-found' component={NotFound} />
        <StudentRoute
          exact
          path='/students'
          user={user}
          component={() => <Students students={students}
          setStudents={setStudents} /> }
        />
        <PrivateRoute path='/student/:id' component={SingleStudent} />
        <PrivateRoute
          path='/add-students'
          user={user}
          component={() => <AddStudent setStudents={setStudents} />}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  students: PropTypes.array.isRequired,
  setStudents: PropTypes.func.isRequired,
  user: PropTypes.any
};
