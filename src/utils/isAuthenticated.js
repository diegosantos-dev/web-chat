export const isAuthenticated = () => {
  const accessToken = localStorage.getItem("token");
  if (accessToken) return true;
  return false;
};

export const authenticatedUser = () => {
  const userId = localStorage.getItem("id");
  if (isAuthenticated()) return userId;
  return false;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
};
