import React from 'react'
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import Root from "./routes/root"
import ErrorPage from './error-page';
import Contact, {action as contactAction,} from './routes/contact';
import { loader as rootLoader, action as rootAction } from "./routes/root";
import  {
  loader as contactLoader,
} from "./routes/contact";
import EditContact,{
  action as editAction,
}  from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";



import {
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />

  </React.StrictMode>,
)
