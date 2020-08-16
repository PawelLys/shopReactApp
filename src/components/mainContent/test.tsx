import React, { useState, lazy, Suspense } from 'react';

const BasicComponent = import('./lazyLoadingTest').then((module) => ({ default: module.LazyLoadingTest }));
const BasicList = lazy(() => BasicComponent);

//const BasicList = lazy(() =>
//  import('./lazyLoadingTest').then(module => ({ default: module.LazyLoadingTest }))
//);

//difference between preloading are explained here:
//https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d

export const test = (): JSX.Element => {
  const [click, setClick] = useState(false);

  return (
    <div style={{ height: 'calc(100vh - 48px)', flex: '1', display: 'flex' }}>
      testtesttest
      <button
        onClick={() => setClick(!click)}
        onMouseEnter={() =>
          import('./lazyLoadingTest').then((module) => ({ default: module.LazyLoadingTest }))
        }
      >
        Click me!
      </button>
      {click && (
        <Suspense fallback={<div>Wczytywanie...</div>}>
          <BasicList />
        </Suspense>
      )}
    </div>
  );
};
