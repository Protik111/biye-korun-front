import { ThemeIcon } from '@mantine/core'
import { IconFall } from '@tabler/icons-react'

const ThemeIconComp = ({ iconComp, size = 28 }) => {
    return (
        <ThemeIcon color="pink" size={size} radius="xl">
            {iconComp ? iconComp : 'B'}
        </ThemeIcon>
    )
}

export default ThemeIconComp