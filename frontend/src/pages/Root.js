import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTockenDuration } from '../util/auth';

function RootLayout() {
  const tocken = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!tocken) {
      return;
    }

    if (tocken === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
    }

    const tockenDuration = getTockenDuration();
    console.log(tockenDuration);

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, tockenDuration);
  }, [tocken, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
