import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './pages/routes';

function App() {
  return (
    <Container id="app-container">
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
