import { groq } from "next-sanity";
import {defineQuery} from "groq";


export const STARTUPS_QUERY = groq`*[
  _type == "startup" && defined(slug.current) &&
  ($search == "" || title match $search || category match $search || author->name match $search)
] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _createdAt,
  author->{
    _id,
    name,
    image,
    bio
  },
  views,
  description,
  category,
  image
}`;

export const STARTUP_BY_ID_QUERY = groq`*[
  _type == "startup" && _id == $id
][0] {
  _id,
  title,
  slug,
  _createdAt,
  author->{
    _id,
    name,
    image,
    bio
  },
  views,
  description,
  category,
  image,
  pitch
}`;

export const STARTUP_VIEWS_QUERY = groq`*[_type == "startup" && _id == $id][0]{
  _id,
  views
}`;

export const AUTHOR_BY_GITHUB_ID_QUERY = groq`*[_type == "author" && id == $id][0]{
  _id,
  id,
  name,
  username,
  email,
  image,
  bio
}`;

export const AUTHOR_BY_ID_QUERY = groq`*[_type == "author" && _id == $id][0]{
  _id,
  id,
  name,
  username,
  email,
  image,
  bio
}`;

export const STARTUPS_BY_AUTHOR_QUERY = groq`*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  },
  views,
  description,
  category,
  image
}`;
