import React from 'react';
import Review from './Review';
import MyFooter from './MyFooter';
function App() {
  return (
    <>
      <main>
        <section className='container'>
          <div className='title'>
            <h2>Reviews on our Product</h2>
            <div className='underline'></div>
          </div>
          <Review />
        </section>
      </main>
      <MyFooter />
    </>
  );
}

export default App;
