export const mockDB = {
  prepare: (query: string) => ({
    bind: (id: string) => ({
      all: async () => {
        if (query.includes("SELECT privateKey")) {
          return {
            results: [{ privateKey: '{"kty":"EC","crv":"P-256","x":"f1WKtTMxWWzNDOoC5Oe3Zr0MGuMQCMYtgADwjpLnQFM","y":"Ue5TIDP_aDtgpu6grZQObCBmLEXHmwE1t7eFMT2Hpoc","d":"Uc9M0AGXznLmPpVlmLQhQXW7Ama9zGI4w3RL1C6sOkc"}' }]
          };
        }
        if (query.includes("SELECT publicKey")) {
          return {
            results: [{ publicKey: '{"kty":"EC","crv":"P-256","x":"f1WKtTMxWWzNDOoC5Oe3Zr0MGuMQCMYtgADwjpLnQFM","y":"Ue5TIDP_aDtgpu6grZQObCBmLEXHmwE1t7eFMT2Hpoc"}' }]
          };
        }
        return { results: [] };
      }
    })
  })
};