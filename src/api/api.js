import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': '79f558d5-fc01-48ce-a085-ae847ddff8c7',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  followUser(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },

  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`, {})
      .then((response) => response.data);
  },
};

export const profileAPI = {
  setUser(userId) {
    return instance.get('profile/' + userId);
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },
};
