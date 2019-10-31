import React from "react";

type ArticleNavigatorProps = {
  currentIndex: number,
  numElements: number,
  onChange: (index : number) => void
}

const ArticleNavigator = ({currentIndex, numElements, onChange} : ArticleNavigatorProps) => {

  function handleNextButton() {
    onChange(currentIndex+1);
  }

  function handlePreviousButton() {
    onChange(currentIndex-1);
  }

  const hasNext = currentIndex+1 < numElements;
  const hasPrevious = currentIndex-1 >= 0;

  return (
    <div className="article-navigator">
      {hasPrevious && <button type="button" className="btn btn-primary" onClick={handlePreviousButton}>Previous</button>}
      <span className="mx-2">{currentIndex+1} / {numElements}</span>
      {hasNext && <button type="button" className="btn btn-primary" onClick={handleNextButton}>Next</button>}
    </div>
  );
};

export default ArticleNavigator;
