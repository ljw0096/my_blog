import main from './pages/main.js'

export default function App({ $app }) {
  new main({ $target: $app })
}
