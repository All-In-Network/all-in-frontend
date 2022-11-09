import { useCallback, useEffect, useState } from 'react';
import { useWalletState } from './wallet';

export const useGetNickName = () => {
  const { api, accounts } = useWalletState();

  const [nickName, setNickName] = useState('');

  const getNickName = useCallback(async () => {
    try {
      const res = await api?.query.nicks.nameOf(accounts?.[0]?.address);

      /* @ts-ignore */
      setNickName(res?.toHuman()?.[0]);
    } catch (error) {
      console.log(error);
    }
  }, [accounts, api?.query.nicks]);

  useEffect(() => {
    getNickName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { nickName };
};
