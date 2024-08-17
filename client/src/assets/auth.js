export const isLoggedIn = () => {
    return !!localStorage.getItem('token'); // Checks if token exists
  };