"use client";

/**
 * WalletGuard Component
 * 
 * Wrapper component that renders children only when a wallet is connected.
 * Shows a premium connect prompt otherwise.
 */

import { useWalletStore } from "@/lib/store/walletStore";
import { WalletConnect } from "./WalletConnect";

interface WalletGuardProps {
  children: React.ReactNode;
}

export function WalletGuard({ children }: WalletGuardProps) {
  const { address } = useWalletStore();

  if (!address) {
    return (
      <div className="wallet-guard-prompt max-w-md mx-auto my-16 p-8 border border-warning/40 bg-warning/5 text-center space-y-6">
        <div className="space-y-2">
          <h2 className="font-orbitron text-lg font-bold text-warning uppercase tracking-widest">
            Wallet Disconnected
          </h2>
          <p className="font-mono text-xs text-text-muted leading-relaxed">
            Please connect your Stellar wallet to access the Create Grant builder.
          </p>
        </div>
        <div className="flex justify-center">
          <WalletConnect />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
