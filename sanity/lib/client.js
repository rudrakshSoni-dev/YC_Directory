import { createClient } from 'next-sanity'

import {projectId, dataset, apiVersion } from "../env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

