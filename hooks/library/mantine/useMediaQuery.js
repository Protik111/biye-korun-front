import { useMediaQuery } from '@mantine/hooks';

function useMediaQueryHook({ expressions = '' }) {
    // const matches = useMediaQuery('(min-width: 56.25em)');
    const matches = useMediaQuery({ expressions });
    console.log('mathes from hook');
    return matches;
}

export default useMediaQueryHook;