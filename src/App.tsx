import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { NameProfile, NameMeaning } from './pages/NameProfile';
import NameGenerator from './pages/NameGenerator';
import JapaneseConverter from './pages/JapaneseConverter';
import NameWheel from './pages/NameWheel';
import BrandGenerator from './pages/BrandGenerator';
import NameCombiner from './pages/NameCombiner';
import BabyNames from './pages/BabyNames';
import Popularity from './pages/Popularity';
import Favorites from './pages/Favorites';
import { About } from './pages/StaticPages';
import { EnhancedPrivacy, EnhancedTerms } from './pages/LegalPages';
import { CommunityGuidelines } from './pages/CommunityGuidelines';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/name-meaning" element={<NameMeaning />} />
          <Route path="/name-generator" element={<NameGenerator />} />
          <Route path="/japanese-converter" element={<JapaneseConverter />} />
          <Route path="/name-wheel" element={<NameWheel />} />
          <Route path="/brand-generator" element={<BrandGenerator />} />
          <Route path="/name-combiner" element={<NameCombiner />} />
          <Route path="/baby-names" element={<BabyNames />} />
          <Route path="/popularity" element={<Popularity />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/names/:slug" element={<NameProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<EnhancedPrivacy />} />
          <Route path="/terms" element={<EnhancedTerms />} />
          <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
