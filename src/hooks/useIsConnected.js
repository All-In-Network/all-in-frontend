import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWalletState } from "./wallet";

export const useIsConnected = () => {
  const { isConnected } = useWalletState();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isConnected) {
      navigate("/connect");
    }
  }, [isConnected, navigate]);
};
