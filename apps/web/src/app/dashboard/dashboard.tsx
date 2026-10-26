"use client";

import { Button } from "@study/ui/components/button";
import { useQuery } from "@tanstack/react-query";

import { authClient } from "@/lib/auth-client";
import { trpc } from "@/utils/trpc";

interface CustomerState {
  activeSubscriptions?: unknown[];
}

const Dashboard = ({
  customerState,
  _session,
}: {
  customerState?: CustomerState | null;
  _session: typeof authClient.$Infer.Session;
}) => {
  const privateData = useQuery(trpc.privateData.queryOptions());

  const hasProSubscription =
    (customerState?.activeSubscriptions?.length ?? 0) > 0;

  return (
    <>
      <p>API: {privateData.data?.message}</p>
      <p>Plan: {hasProSubscription ? "Pro" : "Free"}</p>
      {hasProSubscription ? (
        <Button
          onClick={() => {
            void authClient.customer.portal();
          }}
        >
          Manage Subscription
        </Button>
      ) : (
        <Button
          onClick={() => {
            void authClient.checkout({ slug: "pro" });
          }}
        >
          Upgrade to Pro
        </Button>
      )}
    </>
  );
};

export default Dashboard;
