-- 1. Inserting industry tokens into orgboat.industries
-- This step only needs to be done once for each unique industry

INSERT INTO orgboat.industries (token) VALUES
('T01'),  -- transportation
('W02'),  -- warehousing
('S03'),  -- shipping
--... (continue for all industries)
