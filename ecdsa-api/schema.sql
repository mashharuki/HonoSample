CREATE TABLE KeyPair (
  id TEXT PRIMARY KEY,
  privateKey TEXT NOT NULL,
  publicKey TEXT NOT NULL
);

INSERT INTO KeyPair (id, privateKey, publicKey) VALUES
('1', '{"kty":"EC","crv":"P-256","x":"f1WKtTMxWWzNDOoC5Oe3Zr0MGuMQCMYtgADwjpLnQFM","y":"Ue5TIDP_aDtgpu6grZQObCBmLEXHmwE1t7eFMT2Hpoc","d":"Uc9M0AGXznLmPpVlmLQhQXW7Ama9zGI4w3RL1C6sOkc"}', '{"kty":"EC","crv":"P-256","x":"f1WKtTMxWWzNDOoC5Oe3Zr0MGuMQCMYtgADwjpLnQFM","y":"Ue5TIDP_aDtgpu6grZQObCBmLEXHmwE1t7eFMT2Hpoc"}'),
('2', '{"kty":"EC","crv":"P-256","x":"Ue5TIDP_aDtgpu6grZQObCBmLEXHmwE1t7eFMT2Hpoc","y":"f1WKtTMxWWzNDOoC5Oe3Zr0MGuMQCMYtgADwjpLnQFM","d":"Uc9M0AGXznLmPpVlmLQhQXW7Ama9zGI4w3RL1C6sOkc"}', '{"kty":"EC","crv":"P-256","x":"Ue5TIDP_aDtgpu6grZQObCBmLEXHmwE1t7eFMT2Hpoc","y":"f1WKtTMxWWzNDOoC5Oe3Zr0MGuMQCMYtgADwjpLnQFM"}');
