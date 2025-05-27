import { useCallback, useState } from 'react'

import { DropKTX2 } from '@/webgl/components/DropKTX2'
import { Scene } from '@/webgl/Scene'

function App() {
  const [ktx2Url, setKtx2Url] = useState<string | null>(null)

  const handleDrop = useCallback((file: File) => {
    const url = URL.createObjectURL(file)
    setKtx2Url(url)
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      <DropKTX2 onDrop={handleDrop} />
      <Scene ktx2Url={ktx2Url} />
    </div>
  )
}

export default App
