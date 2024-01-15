import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PageContainer from "./containers/PageContainers"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <PageContainer>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </PageContainer>
    </>
  )
}

export default App
