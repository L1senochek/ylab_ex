import { IMockFetch, IMockFetchResponse } from '@/model/mockFetch';

const mockFetch = ({
  email,
  password,
}: IMockFetch): Promise<IMockFetchResponse> => {
  return new Promise((resolve) => {
    setTimeout((): void => {
      if (email === 'test@test.com' && password === 'Test123@') {
        resolve({ ok: true });
      } else {
        resolve({ ok: false });
      }
    }, 1000);
  });
};

export default mockFetch;
