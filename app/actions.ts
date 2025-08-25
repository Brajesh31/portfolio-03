'use server'

import { generateCV } from '@/lib/generate-cv'

export async function downloadCV() {
  const cvContent = generateCV()
  const blob = new Blob([cvContent], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  
  return {
    url,
    filename: 'Brajesh_CV.txt'
  }
}

