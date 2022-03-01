import { AppProvider } from './state/context';
import ProductPage from './ProductPage';

function App() {
  return (
    <AppProvider>
      <ProductPage />
    </AppProvider>
  );
}

export default App;
