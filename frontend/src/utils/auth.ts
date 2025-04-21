import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
  sub: string;
  exp: number;
}

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;

  try {
    const decoded = jwtDecode<TokenPayload>(token);
    return decoded.exp > Date.now() / 1000;
  } catch {
    return false;
  }
};

export const logout = (): void => {
  localStorage.removeItem('token');
};