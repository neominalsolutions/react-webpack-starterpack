import { User } from '../models/user.model';
import axiosInstance from './axios.instance';

// repository pattern gibi düşündüğümüzde yada backend servis gibi düşündüğümüzde user listesi veya user detayı veya user create user delete user update gibi işlemleri bu servisteki methodlar ile yapabilirz.
export const getUser = async () => {
	return axiosInstance.get<User[]>('users');
};

export const saveUser = async (data: any) => {
	return axiosInstance.post('users', data);
};
