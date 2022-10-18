import Editor from './components/Editor';
import Viewer from './components/Viewer';
import EditorContextProvider from './components/EditorContextProvider';
import CardsContextProvider from './components/CardsContextProvider';
import './App.css';

function App() {

  return (
    <EditorContextProvider>
      <CardsContextProvider>
        <Editor />
        <Viewer />
      </CardsContextProvider>
    </EditorContextProvider>
  );
}

export default App;