import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "691b01bc7a6285033f25aa99", 
  requiresAuth: true // Ensure authentication is required for all operations
});
