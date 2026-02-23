import { defineBackend } from "@aws-amplify/backend";

// Hosting-only backend — no auth or data resources.
// Phase 2 will add Cognito auth here.
defineBackend({});
