import { Overlay } from '@mantine/core'
import { Header } from 'header'

export default function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Overlay color='#000' backgroundOpacity={0.45} />
    </div>
  )
}
