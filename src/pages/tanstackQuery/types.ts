export interface TodoItem {
  id: string;
  text: string;
}

export interface Todos {
  items: readonly TodoItem[];
  ts: number;
}
