let nextTodoId = 1;
export default nextTodoId;

export function increaseId() {
  nextTodoId++;
  return nextTodoId;
}
