import axios, {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import {PostType} from "./type.ts";
import {Dispatch, SetStateAction} from "react";


const getPostById = async (id: number) => {
  const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

function usePost(postId: number) {
  return useQuery<PostType, AxiosError>(['post', postId], () => getPostById(postId), {
    enabled: !!postId,
  });
}

function Post({postId, setPostId}: { postId: number, setPostId: Dispatch<SetStateAction<number>> }) {
  const {status, data, error, isFetching} = usePost(postId);

  return (
    <div>
      <div>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
      </div>
      {!postId || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error?.message}</span>
      ) : (
        <>
          <h1>{data?.title}</h1>
          <div>
            <p>{data?.body}</p>
          </div>
          <div>{isFetching ? 'Background Updating...' : ' '}</div>
        </>
      )}
    </div>
  );
}

export default Post;
