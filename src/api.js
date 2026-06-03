const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const deleteMemo = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete memo");
  }

  return true;
};

export const updateMemo = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update memo");
  }

  return res.json();
};
export const fetchMemos = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch memos");
  }
  return res.json();
};

export const fetchMemoById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch memo");
  }
  return res.json();
};

export const createMemo = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to create memo");
  }
  return res.json();
};
