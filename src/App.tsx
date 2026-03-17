import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './presentation/components/layout/Layout';
import { HomePage } from './presentation/pages/HomePage';
import { PlannerPage } from './presentation/pages/PlannerPage';
import { HowItWorksPage } from './presentation/pages/HowItWorksPage';
import { StoresPage } from './presentation/pages/StoresPage';
import { JoinPage } from './presentation/pages/JoinPage';
import { ImpactPage } from './presentation/pages/ImpactPage';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-6xl mb-6">✈️</div>
      <h1 className="text-3xl font-light text-brand-charcoal mb-3">Page Not Found</h1>
      <p className="text-brand-gray mb-6">The page you're looking for has flown away.</p>
      <a href="/" className="btn-primary">Back to Home</a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plan" element={<PlannerPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/stores" element={<StoresPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
