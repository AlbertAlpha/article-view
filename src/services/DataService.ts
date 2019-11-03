import articlesJson from '../resources/data/articles.json';
import Article from "../models/Article";

const IMG_TAG_REGEX = /<img src="/gi;
const IMG_TAG_SUBST_PREFIX = '<img src="https://cdn2.audiencemedia.com';

export function loadArticles() : Promise<Article[]> {
  const data : Article[] = articlesJson.data;
  // Add endpoint prefix for images inside body
  data.forEach(article => {
    article.body = article.body.replace(IMG_TAG_REGEX, IMG_TAG_SUBST_PREFIX);
  });
  return Promise.resolve(data);
}
