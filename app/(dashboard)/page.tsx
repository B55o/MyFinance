"use client";
import { useGetAccounts } from "@/features/accounts/api/useGetAccount";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  const accountsQuery = useGetAccounts();

  return (
    <ClerkProvider afterSignOutUrl="/">
      {accountsQuery.data?.map((account) => (
        <div key={account.id}>{account.name}</div>
      ))}
    </ClerkProvider>
  );
}
