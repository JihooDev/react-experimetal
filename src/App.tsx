import { Suspense } from 'react'

import './App.css'
import Use from './project/use_hook/Use'
import Loading from './components/Loading'
import { worker } from './mocks/worker'

function App() {


  return (
    <Suspense fallback={<Loading />}>
      <Use />
    </Suspense>
  )
}

export default App
