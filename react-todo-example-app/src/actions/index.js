export const ADD_TO_DO = 'ADD_TO_DO';

export function addToDo(newToDo) {
  const todo = [newToDo]
  return {
    type: ADD_TO_DO,
    payload: todo
  }
}
