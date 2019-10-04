interface Weight {
  lbs: number[]
  kg: number[]
}

interface Cat {
  adaptability: number
  affectionLevel: number
  alternativeNames: string[]
  CFAUrl: string
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
  id: string
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
  weight: Weight
  wikipediaURL: string
}

export { Cat }
