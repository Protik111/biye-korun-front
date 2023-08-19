import { useMediaQuery } from '@mantine/hooks';

function useMediaQueryHookSSR({ expressions = '' }) {
    const matches = useMediaQuery({ expressions }, true, { getInitialValueInEffect: false });
    // console.log('mathes from hook', matches);

    return matches;

}

export default useMediaQueryHookSSR;