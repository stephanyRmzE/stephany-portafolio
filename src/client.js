import  imageUrlBuilder  from "@sanity/image-url";
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: 'production',
  apiVersion: '2023-03-27', // use current UTC date - see "specifying API version"!
  token: process.env.REACT_APP_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
