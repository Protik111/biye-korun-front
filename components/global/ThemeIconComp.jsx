import { ThemeIcon } from '@mantine/core'
import { IconFall } from '@tabler/icons-react'

const ThemeIconComp = ({ iconComp }) => {
    return (
        <ThemeIcon color="pink" size={28} radius="xl">
            {iconComp ? iconComp : 'B'}
        </ThemeIcon>
    )
}

export default ThemeIconComp