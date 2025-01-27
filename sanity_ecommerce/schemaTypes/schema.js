import {createSchema} from 'sanity'

// Import your custom schemas
import product from './product'
import banner from './banner'

// Define the schema
export const schemaTypes = [product, banner]
