import {useRef} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const fetchCreateTodo = async (text: string) => {
  return fetch('/tanstack-query/todo/create', {
    method: 'POST',
    body: JSON.stringify({
      text: text
    })
  });
};

function TodoInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const todoMutation = useMutation({
    mutationFn: fetchCreateTodo,
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ['todos']});
    },
  });

  const onClick = () => {
    const inputValue = inputRef.current?.value;
    if (inputValue && inputValue.length > 0) {
      todoMutation.mutate(inputValue);
      inputRef.current.value = "";
    } else {
      alert("1글자 이상 입력해야 저장됩니다.");
    }
  };

  return (
    <div>
      <div>할 일을 입력하세요</div>
      <input type="text" ref={inputRef}/>
      <button type="submit" onClick={onClick}>
        등록
      </button>
    </div>
  );
}

export default TodoInput;
