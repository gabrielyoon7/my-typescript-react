import {Dispatch, SetStateAction} from "react";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {PostType} from "./type.ts";
import axios, {AxiosError} from "axios";

function usePosts() {
  return useQuery<PostType[], AxiosError>(['posts'], async () => {
    const {data} = await axios.get<PostType[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  });
}

function Posts({setPostId}: { setPostId: Dispatch<SetStateAction<number>> }) {
  const queryClient = useQueryClient();
  const {status, data, error, isFetching} = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error?.message}</span>
        ) : (
          <>
            <div>
              {data?.map((post: { id: number, title: string }) => (
                <p key={post.id}>
                  <a
                    onClick={() => setPostId(post.id)}
                    href="#"
                    style={
                      // We can access the query data here to show bold links for
                      // ones that are cached
                      queryClient.getQueryData(['post', post.id])
                        ? {
                          fontWeight: 'bold',
                          color: 'green',
                        }
                        : {}
                    }
                  >
                    {post.title}
                  </a>
                </p>
              ))}
            </div>
            <div>{isFetching ? 'Background Updating...' : ' '}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Posts;
