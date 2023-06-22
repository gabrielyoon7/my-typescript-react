import {useState} from "react";
import Posts from "./Posts.tsx";
import Post from "./Post.tsx";

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

export default TanstackQueryBasic;
