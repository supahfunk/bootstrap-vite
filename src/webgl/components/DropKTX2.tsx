/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'

interface DropKTX2Props {
  onDrop: (file: File) => void
  children?: React.ReactNode
}

export const DropKTX2: React.FC<DropKTX2Props> = ({ onDrop, children }) => {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      const file = e.dataTransfer.files[0]
      if (file && file.name.endsWith('.ktx2')) {
        onDrop(file)
      }
    },
    [onDrop]
  )

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="pointer-events-auto absolute inset-0 z-10 flex items-center justify-center bg-black/30"
      style={{ pointerEvents: 'auto' }}
    >
      {children ?? (
        <span className="text-lg text-white">Trascina qui un file .ktx2</span>
      )}
    </div>
  )
}
