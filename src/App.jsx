import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { URL } from './constants'
import Answer from './components/Answer'

function App() {
  const [question, setQuestion] = useState('')
  const [result, setResult] = useState(undefined)

  const payload = {
    "contents": [{
    "parts": [{ "text": question}]
    }]
  }


  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    response = await response.json();

    let dataString = response.candidates[0].content.parts[0].text;

    dataString = dataString
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    setResult(dataString);

  };

  return (
    <div className="grid grid-cols-5 h-screen text-center">
      <div className="col-span-1 bg-zinc-700"></div>
      <div className="col-span-4 p-10">
        <div className="container h-130 overflow-y-auto rounded-xl p-4 text-whiter">
          <div className="text-zinc-200">
            {/* {result} */}
            <ul>
              {result &&
                result.map((item, index) => (
                  <li className='text-left'><Answer ans={item} totalResult={result.length} index={index}/></li>
                ))}
            </ul>
          </div>
        </div>
        <div className="bg-zinc-800 p-1 pr-5 w-1/2 text-white m-auto rounded-4xl border border-zinc-400 flex h-16">
          <input
            type="text"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            className="w-full h-full p-3 outline-none"
            placeholder="Ask me anything"
          ></input>
          <button onClick={askQuestion}>Ask</button>
        </div>
      </div>
    </div>
  );
}

export default App
