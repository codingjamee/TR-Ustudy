import { ReactNode, useEffect, useState } from "react";
import { type BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";
import fetchingImg from "./assets/data-fetching.png";
import BlogPosts from "./components/BlogPosts";
import ErrorMessage from "./components/ErrorMessage";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const data = (await get(
          "https://jsonplaceholder.typicode.com/pfaaaaosffffs"
        )) as RawDataBlogPost[];

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });

        setFetchedPosts(blogPosts);
      } catch (err) {
        if (err instanceof Error) {
          console.log("error is ocurred");
          console.log(err);
          setError("error is ocurred");
        }
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, []);

  let content: ReactNode | null = null;

  if (error) {
    console.log("setError to content");
    content = <ErrorMessage text={error} />;
  }

  if (fetchedPosts) {
    console.log("set BlogPosts to content");
    content = <BlogPosts posts={fetchedPosts} />;
  }

  if (isFetching) {
    console.log("set loading to content");
    content = <p id="loading-fallback">Fetching posts...</p>;
  }
  console.log(content);

  return (
    <main>
      <img src={fetchingImg} alt="abstract img" />
      {content}
    </main>
  );
}

export default App;
