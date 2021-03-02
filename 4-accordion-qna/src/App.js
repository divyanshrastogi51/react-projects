import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <main>
        <div className='container'>
          <h3>questions and answers about login</h3>
          <section className='info'>
            {questions.map((question) => {
              return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
      <footer className='footer'>Made with ❤️ by  <a className='link' href="https://divyansh-rastogi.netlify.app/"> Divyansh Rastogi </a>  Inspired from John Smilga</footer>
    </>
  );
}

export default App;
