import { useState } from 'react'
import { InputText } from 'remoteApp/InputText'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Host Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <InputText />
    </>
  )
}

export default App
