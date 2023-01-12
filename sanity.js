import createImageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "Production",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source);
