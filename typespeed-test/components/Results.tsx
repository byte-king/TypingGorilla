interface ResultsProps {
  wordsPerMinute: number;
}

const Results: React.FC<ResultsProps> = ({ wordsPerMinute }) => {
  return (
    <div>
      <h2>Your Results</h2>
      <p>Words Per Minute: {wordsPerMinute}</p>
    </div>
  );
};

export default Results;
