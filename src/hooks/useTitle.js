import { useEffect } from 'react';

import { TITLE } from '../constants';

function useTitle(pageTitle) {
  useEffect(() => {
    document.title = TITLE;

    if (pageTitle) {
      document.title += ` – ${pageTitle}`;
    }
  });
}

export default useTitle;
