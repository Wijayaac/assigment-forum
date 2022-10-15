import { Thread } from "../Card";
import { Spinner } from "../Loading";

const ThreadListing = (props) => {
  const { threads, isLoading } = props;

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='thread-list'>
          {threads.map((thread, key) => (
            <Thread thread={thread} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreadListing;
