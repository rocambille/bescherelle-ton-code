import { useEffect } from 'react';

import { appName } from '../helpers';

function useTitle(pageTitle) {
  useEffect(() => {
    document.title = appName();

    if (pageTitle) {
      document.title += ` – ${pageTitle}`;
    }
  });
}

export default useTitle;
