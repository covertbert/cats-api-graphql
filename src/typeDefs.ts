import { gql } from 'apollo-server'

const typeDefs = gql`
  """
  Individual cat
  """
  type Cat {
    """
    Adaptability score (1-5)
    """
    adaptability: Int!

    """
    Affection level (1-5)
    """
    affectionLevel: Int!

    """
    Alternative names for the breed
    """
    alternativeNames: [String]

    """
    Child friendliness score (1-5)
    """
    childFriendliness: Int!

    """
    The country code for the country from which this breed originates
    """
    countryCode: String!

    """
    Description of the breed
    """
    description: String!

    """
    Dog friendliness score (1-5)
    """
    dogFriendliness: Int!

    """
    Energy level score (1-5)
    """
    energyLevel: Int!

    """
    Is the breed experimental
    """
    experimental: Boolean!

    """
    How much grooming does the breed require (1-5)
    """
    grooming: Int!

    """
    Is the breed hairless
    """
    hairless: Boolean!

    """
    What are the chances of the breed having health issues (1-5)
    """
    healthIssues: Int!

    """
    Is the breed hypoallergenic
    """
    hypoallergenic: Boolean!

    """
    The API meta ID for the breed
    """
    id: Int!

    """
    Is the breed solely to be kept indoors
    """
    indoor: Boolean!

    """
    Intelligence level of the breed (1-5)
    """
    intelligence: Int!

    """
    Is the breed considered a "lap cat"
    """
    lap: Boolean

    """
    Lifespan of the breed in years. First item in the array is the lower and and second item is the upper end of the range.
    """
    lifeSpan: [Int]!

    """
    Name of breed
    """
    name: String!

    """
    Is it a natural breed. Natural breeds are those that began as landraces but which have been developed into formal breeds
    """
    natural: Boolean!

    """
    Country of origin
    """
    origin: String!

    """
    Is the breed a "rare" breed
    """
    rare: Boolean!

    """
    Is the breed a rex
    """
    rex: Boolean!

    """
    How much does the breed shed (1-5)
    """
    sheddingLevel: Int!

    """
    Does the breed have short legs
    """
    shortLegs: Boolean!

    """
    The breed's need to socialise (1-5)
    """
    socialNeeds: Int!

    """
    Is the breed friendly toward strangers (1-5)
    """
    strangerFriendly: Int!

    """
    Does the breed have a suppressed tail
    """
    suppressedTail: Boolean!

    """
    The temperament of the breed
    """
    temperament: [String]!

    """
    How vocal the breed is (1-5)
    """
    vocalisation: Int!

    """
    The average weight of the breed in kg. First item in the array is the lower and and second item is the upper end of the range.
    """
    weight: [Int]!

    """
    The Wikipedia URL for the breed
    """
    wikipediaURL: String
  }

  type Query {
    """
    Retrieves all cats
    """
    cats(filter: [CatsFilterInput]): [Cat]

    """
    Returns a cat for the given ID
    """
    getCatById(id: Int!): Cat

    """
    Returns a cat for the given name
    """
    getCatByName(name: String!): Cat
  }

  type Mutation {
    """
    Creates a new cat
    """
    createCat(cat: CreateCatInput): CreateCatMutationResult

    """
    Deletes a cat
    """
    deleteCat(id: Int): DeleteCatMutationResult
  }

  scalar CatsFilterInputValue

  input CatsFilterInput {
    key: String
    value: CatsFilterInputValue
  }

  input CreateCatInput {
    adaptability: Int!
    affectionLevel: Int!
    alternativeNames: [String]
    childFriendliness: Int!
    countryCode: String!
    description: String!
    dogFriendliness: Int!
    energyLevel: Int!
    experimental: Boolean!
    grooming: Int!
    hairless: Boolean!
    healthIssues: Int!
    hypoallergenic: Boolean!
    indoor: Boolean!
    intelligence: Int!
    lap: Boolean
    lifeSpan: [Int]!
    name: String!
    natural: Boolean!
    origin: String!
    rare: Boolean!
    rex: Boolean!
    sheddingLevel: Int!
    shortLegs: Boolean!
    socialNeeds: Int!
    strangerFriendly: Int!
    suppressedTail: Boolean!
    temperament: [String]!
    vocalisation: Int!
    weight: [Int]!
    wikipediaURL: String
  }

  type CreateCatMutationResult {
    id: Int
    name: String
  }

  type DeleteCatMutationResult {
    id: Int
  }
`

export { typeDefs }
