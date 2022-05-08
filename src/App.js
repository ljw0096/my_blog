import MainPage from './pages/MainPage.js'

export default function App({ $app }) {
  new MainPage({ $target: $app })
}
