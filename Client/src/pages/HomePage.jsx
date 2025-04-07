import { useState } from 'react';
import NavBar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <NavBar />

      <main>
        <div>
          <section id='hero'>
            <h1>Welcome</h1>

            <section className='inputs'>
              <div className='input-group'>
                <label htmlFor='input1'>Data 1</label>
                <input
                  type='text'
                  id='input1'
                  placeholder='Skriv något här...'
                />
              </div>
              <div className='input-group'>
                <label htmlFor='input2'>Data 2</label>
                <input
                  type='text'
                  id='input2'
                  placeholder='Skriv något här...'
                />
              </div>
              <div className='input-group'>
                <label htmlFor='input3'>Data 3</label>
                <input
                  type='text'
                  id='input3'
                  placeholder='Skriv något här...'
                />
              </div>
              <div className='input-group'>
                <label htmlFor='input4'>Data 4</label>
                <input
                  type='text'
                  id='input4'
                  placeholder='Skriv något här...'
                />
              </div>
            </section>

            <section className='buttons'>
              <button>OpenAI</button>
              <button>Gemini</button>
              <button>Ollama</button>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
