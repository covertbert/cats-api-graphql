interface Cat {
  adaptability: number
  affectionLevel: number
  alternativeNames: string[]
  childFriendliness: number
  countryCode: string
  description: string
  dogFriendliness: number
  energyLevel: number
  experimental: boolean
  grooming: number
  hairless: boolean
  healthIssues: number
  hypoallergenic: boolean
  id: number
  indoor: boolean
  intelligence: number
  lifeSpan: number[]
  name: string
  natural: boolean
  origin: string
  rare: boolean
  rex: boolean
  sheddingLevel: number
  shortLegs: boolean
  socialNeeds: number
  strangerFriendly: number
  suppressedTail: boolean
  temperament: string[]
  vocalisation: number
  weight: number[]
  wikipediaURL: string
}

interface CatFilter {
  key: keyof Cat
  value: Cat[keyof Cat]
}

export { Cat, CatFilter }
