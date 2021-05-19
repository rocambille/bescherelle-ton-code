/* thx https://robkendal.co.uk/blog/2020-02-20-creating-a-react-code-editor-and-syntax-highlighter */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

import './CodeEditor.css';

function CodeEditor({ id, className, code, setCode }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className={`${className} code-edit-container border rounded`}>
      <pre className="code-output">
        <code className="language-javascript">{code}</code>
      </pre>
      <textarea id={id} className="code-input px-2 py-4" value={code} onChange={(event) => setCode(event.target.value)} />
    </div>
  );
}

CodeEditor.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
};

CodeEditor.defaultProps = {
  id: '',
  className: '',
};

export default CodeEditor;
