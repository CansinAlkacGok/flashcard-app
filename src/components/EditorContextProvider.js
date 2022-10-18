import { useReducer } from 'react';
import EditorContext from "../contexts/EditorContext";

const initialEditorState = {
  editor: true
};

const editorReducer = function(editorState, action) {
  switch (action.type) {
    case 'editor': {
      return {
        editor: !editorState.editor
      }
    }
    default: {
      return editorState;
    }
  }
};

function EditorContextProvider({ children }) {
  const [editorState, editorDispatch] = useReducer(editorReducer, initialEditorState);
  const { editor } = editorState;

  const switchMode = () => {
    editorDispatch({
      type: 'editor'
    })
  };
    return (
        <EditorContext.Provider value={{ editor, switchMode }}>
            {children}
        </EditorContext.Provider>
    )
}

export default EditorContextProvider;