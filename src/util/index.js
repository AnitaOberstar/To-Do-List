export const createTodo = async (todo) => {
  try {
    const res = await fetch('api/todo/create', {
      method: 'POST',
      body: todo,
    });
    return res.json();
  } catch (err) {
    return { err };
  }
};

export const updateTodo = async (id, form) => {
  try {
    const res = await fetch(`api/todo/${id}`, {
      method: 'PUT',
      body: form,
    });
    return res.json();
  } catch (err) {
    return { err };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch('api/todos');
    const data = await res.json();
    return data;
  } catch (err) {
    return { err };
  }
};

export const removeTodo = async (id) => {
  try {
    await fetch(`api/todo/${id}`, {
      method: 'DELETE',
    });
    return 'deleted';
  } catch (err) {
    return { err };
  }
};
