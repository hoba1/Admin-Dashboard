import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/dashboard/Dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/contacts/Contacts';
import Form from './pages/form/Form';
import Calendar from './pages/calendar/Calendar';
import Faq from './pages/faq/Faq';
import BarChart from './pages/barChart/BarChart';
import PieChart from './pages/pieChart/PieChart';
import LineChart from './pages/lineChart/LineChart';
import Geography from './pages/geography/Geography';
import Invoices from './pages/invoices/Invoices';
import NotFound from './pages/notFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Dashboard />} />
          <Route path='team' element={<Team />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='form' element={<Form />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='faq' element={<Faq />} />
          <Route path='bar' element={<BarChart />} />
          <Route path='pie' element={<PieChart />} />
          <Route path='line' element={<LineChart />} />
          <Route path='geography' element={<Geography />} />
          <Route path='invoices' element={<Invoices />} />


          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

