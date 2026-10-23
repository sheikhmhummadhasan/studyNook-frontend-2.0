import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading...</span>
      </div>
    </div>
  );
};

export default loading;