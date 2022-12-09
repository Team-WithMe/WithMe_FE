import { useLayoutEffect, useEffect } from 'react';

const useIsomorphicEffect = () => (typeof window !== 'undefined' ? useLayoutEffect : useEffect);

export default useIsomorphicEffect;
