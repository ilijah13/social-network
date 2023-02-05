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
  getProfile(userId) {
    return instance.get('profile/' + userId);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status/', { status });
  },
  updatePhoto(photo) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {
      email,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete('auth/login');
  },
};
