import { type ClassValue, clsx } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-s-h1',
        'text-s-h2',
        'text-s-h3',
        'text-s-h4',
        'text-s-h5',
        'text-s-h6',

        'text-d-h1',
        'text-d-h2',
        'text-d-h3',
        'text-d-h4',
        'text-d-h5',
        'text-d-h6',

        'text-huge',
        'text-name',
        'text-gucci',
        'text-large',
        'text-regular',
        'text-small',
        'text-caption',
        'text-overline'
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
