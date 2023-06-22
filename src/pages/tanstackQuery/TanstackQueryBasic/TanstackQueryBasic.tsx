import axios, {AxiosError} from 'axios';
import {
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {Dispatch, SetStateAction, useState} from "react";
import {Todo} from "./type.ts";


function TanstackQueryBasic() {
  const [postId, setPostId] = useState<number>(-1);

  return (
    <>
      <p>
        <div>
          아래 게시물을 방문하면 처음 게시물을 로드할 때 로드 상태로 표시됩니다. 그러나 이 목록으로 돌아가서 이미 방문한 게시물을 다시 클릭하면 바로 로드되고 배경이 새로 고쳐지는 것을 볼 수 있습니다!
        </div>
        <strong>
          (더 긴 로드 시퀀스를 시뮬레이션하기 위해 네트워크 속도를 조절해야 할 수도 있습니다)
        </strong>
      </p>
      {
        postId > -1 ? (
          <Post postId={postId} setPostId={setPostId}/>
        ) : (
          <Posts setPostId={setPostId}/>
        )}
    </>
  );
}

function usePosts() {
  return useQuery<Todo[], AxiosError>(['posts'], async () => {
    const {data} = await axios.get<Todo[]>(
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

const getPostById = async (id: number) => {
  const {data} = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return data;
};

function usePost(postId: number) {
  return useQuery<Todo, AxiosError>(['post', postId], () => getPostById(postId), {
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

export default TanstackQueryBasic;
