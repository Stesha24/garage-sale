import React from 'react';
import { Header } from './components/header/Header';
import { LearnMore } from './components/learnMore/LearnMore';
import { Portfolio } from './components/portfolio/Portfolio';
import { Feedback } from './components/feedback/Feedback';
import useBreakpoint from './components/utils/useMedia';
import './App.css';
import { Footer } from './components/footer/Footer';
import { WhyUs } from './components/whyus/WhyUs';

const queries = {
  xs: '(max-width: 320px)',
  sm: '(max-width: 640px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 1024px)'
};

function App() {
  const breakpoint = useBreakpoint(queries);

  return breakpoint && (
    <div>
      <Header />
      <WhyUs />
      <LearnMore breakpoint={breakpoint} />
      <Portfolio breakpoint={breakpoint} />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
