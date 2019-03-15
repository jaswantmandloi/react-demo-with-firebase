import localStorage from "localStorage";

const StorageService = {
  getUserToken: () => {
    return localStorage.getItem("token", "");
  },
  saveUserToken: token => {
    localStorage.setItem("token", token);
    
  },
  deleteUserToken: () => {
    localStorage.setItem("token", "");
    
  }
};

export default StorageService;
