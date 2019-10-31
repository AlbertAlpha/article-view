import React, {useEffect, useState} from "react";
import {loadArticles} from '../services/DataService';
import Article from "../models/Article";
import ArticleNavigator from "../components/ArticleNavigator";
import ArticleDetails from "../components/ArticleDetails";
import InputSearch from "../components/InputSearch";

const ArticleBrowserContainer = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(-1);

  function initialize() {
    loadArticles().then(data => {
      setArticles(data);
      setCurrentArticles(data);
      setCurrentArticleIndex(data.length ? 0 : -1);
    });
  }

  function changeArticle(newArticleIndex : number) {
    setCurrentArticleIndex(newArticleIndex);
  }

  function searchArticles(text : string) {
    text = text.trim();
    const foundArticles = articles.filter(article => {
      if (text === '') return true;
      else if (article.title && article.title.includes(text)) return true;
      else if (article.authors && article.authors.join(',').includes(text)) return true;
      else if (article.body && article.body.includes(text)) return true;
      return false;
    });
    setCurrentArticles(foundArticles);
    setCurrentArticleIndex(foundArticles.length ? 0 : -1);
  }

  useEffect(initialize, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-4">
        <div className="col-auto">
          <InputSearch onSearch={searchArticles} minCharacters={2} />
        </div>
        <div className="col-auto">
          <ArticleNavigator currentIndex={currentArticleIndex}
                            numElements={currentArticles.length}
                            onChange={changeArticle} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ArticleDetails article={currentArticles[currentArticleIndex] || {}}/>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-auto">
          <ArticleNavigator currentIndex={currentArticleIndex}
                            numElements={currentArticles.length}
                            onChange={changeArticle} />
        </div>
      </div>
    </div>
  );
};

export default ArticleBrowserContainer;
