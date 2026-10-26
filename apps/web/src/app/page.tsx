"use client";

import { cn } from "@study/ui/lib/utils";
import { useQuery } from "@tanstack/react-query";

import { trpc } from "@/utils/trpc";

const TITLE_TEXT = `
    ▌     ▌ ▌   ▗                                   
    ▛▌▀▌▛▘▙▘▛▌▀▌▜▘▛▌▛▌  ▛▘▛▌▀▌▛▘█▌                  
    ▌▌█▌▙▖▛▖▌▌█▌▐▖▙▌▌▌▗ ▄▌▙▌█▌▙▖▙▖                  
                          ▌                         
    ▌   ▘▜  ▌  ▌     ▄     ▜ ▌   ▜        ▖ ▖      ▘
    ▛▌▌▌▌▐ ▛▌  ▛▌▌▌  ▌▌▀▌▌▌▐ ▛▌█▌▐ ▛▛▌▌▌  ▛▖▌▀▌▀▌▛▘▌
    ▙▌▙▌▌▐▖▙▌  ▙▌▙▌  ▙▘▙▖▙▌▐▖▌▌▙▖▐▖▌▌▌▙▌  ▌▝▌█▌▙▖▌ ▌
                 ▄▌                   ▄▌            
`;

const Home = () => {
  const healthCheck = useQuery(trpc.healthCheck.queryOptions());
  const isConnected = Boolean(healthCheck.data);

  let statusText = "Disconnected";

  if (healthCheck.isLoading) {
    statusText = "Checking...";
  } else if (isConnected) {
    statusText = "Connected";
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-2">
      <pre className="overflow-x-auto font-mono text-sm">{TITLE_TEXT}</pre>
      <div className="grid gap-6">
        <section className="rounded-lg border p-4">
          <h2 className="mb-2 font-medium">API Status</h2>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "size-2 rounded-full",
                isConnected ? "bg-primary" : "bg-destructive"
              )}
            />
            <span className="text-sm text-muted-foreground">{statusText}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
