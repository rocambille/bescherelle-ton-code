/* thx https://robkendal.co.uk/blog/2020-02-20-creating-a-react-code-editor-and-syntax-highlighter */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import './CodeEditor.css';

function CodeEditor({ code, setCode }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="code-edit-container border rounded">
      <textarea className="code-input" value={code} onChange={(event) => setCode(event.target.value)} />
      <pre className="code-output">
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
}

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
};

export default CodeEditor;
