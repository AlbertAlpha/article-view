import React from "react";
import Article from "../models/Article";

type ArticleDetailsProps = {
  article: Article
}

function getAuthors(article: Article): string {
  if (!article.authors) return '';
  return article.authors.join(', ');
}

const ArticleDetails = ({article}: ArticleDetailsProps) => (
  <div className="card article">
    <div className="card-body">
      <h2 className="card-title article-title">{article.title}</h2>
      <h3 className="card-subtitle mb-2 text-muted article-strap">{article.strap_line}</h3>
      <p className="text-muted">
        <b>{getAuthors(article)}</b>
      </p>
      <p className="card-text text-justify article-body"
         dangerouslySetInnerHTML={{__html: article.body}}
      />
    </div>
  </div>
);

export default ArticleDetails;
