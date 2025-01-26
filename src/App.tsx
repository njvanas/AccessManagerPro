import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';
import { Dashboard } from './components/dashboard/Dashboard';
import { useAuth } from './contexts/AuthContext';
import { Toaster } from 'react-hot-toast';

const AuthenticatedApp: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard /> : <LoginForm />;
};

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <AuthenticatedApp />
    </AuthProvider>
  );
}

export default App;