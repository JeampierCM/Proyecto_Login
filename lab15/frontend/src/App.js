import Index from './pages/Index';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Register from './pages/Register';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './pages/NotFount';



/**
 * La función de la aplicación devuelve un componente BrowserRouter que contiene un componente de rutas
 * que contiene un componente de ruta para cada página de la aplicación.
 * @returns La declaración de retorno es la última declaración en una función. Si la declaración de
 * devolución va seguida de una expresión, esa expresión se evalúa y se devuelve el valor.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
