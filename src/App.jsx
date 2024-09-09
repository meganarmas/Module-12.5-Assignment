import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CommentForm from './Componets/CommentForm';
import AddPost from './Componets/Add';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayHome from './Componets/Home';
import './App.css'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<DisplayHome  />} />
          <Route path="add-comment" element={<CommentForm />} />
          <Route path="add-post" element={<AddPost />} />
        </Routes>
      </Router>
    
    </QueryClientProvider>
  )
}

export default App
