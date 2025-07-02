-- Atualiza produto 1
UPDATE products SET brand_id = 1 WHERE id = 1;
-- Remove categorias antigas do produto 1
DELETE FROM product_categories WHERE product_id = 1;
INSERT INTO product_categories (product_id, category_id) VALUES (1, 1);
-- Remove tags antigas do produto 1
DELETE FROM product_tags WHERE product_id = 1;
INSERT INTO product_tags (product_id, tag_id) VALUES (1, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (1, 2);
-- Remove variações antigas do produto 1
DELETE FROM product_variants WHERE product_id = 1;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (1, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (1, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (1, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (1, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 2
UPDATE products SET brand_id = 2 WHERE id = 2;
-- Remove categorias antigas do produto 2
DELETE FROM product_categories WHERE product_id = 2;
INSERT INTO product_categories (product_id, category_id) VALUES (2, 2);
-- Remove tags antigas do produto 2
DELETE FROM product_tags WHERE product_id = 2;
INSERT INTO product_tags (product_id, tag_id) VALUES (2, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (2, 4);
-- Remove variações antigas do produto 2
DELETE FROM product_variants WHERE product_id = 2;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (2, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (2, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (2, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (2, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 3
UPDATE products SET brand_id = 3 WHERE id = 3;
-- Remove categorias antigas do produto 3
DELETE FROM product_categories WHERE product_id = 3;
INSERT INTO product_categories (product_id, category_id) VALUES (3, 3);
-- Remove tags antigas do produto 3
DELETE FROM product_tags WHERE product_id = 3;
INSERT INTO product_tags (product_id, tag_id) VALUES (3, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (3, 3);
-- Remove variações antigas do produto 3
DELETE FROM product_variants WHERE product_id = 3;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (3, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (3, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (3, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (3, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 4
UPDATE products SET brand_id = 4 WHERE id = 4;
-- Remove categorias antigas do produto 4
DELETE FROM product_categories WHERE product_id = 4;
INSERT INTO product_categories (product_id, category_id) VALUES (4, 4);
-- Remove tags antigas do produto 4
DELETE FROM product_tags WHERE product_id = 4;
INSERT INTO product_tags (product_id, tag_id) VALUES (4, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (4, 4);
-- Remove variações antigas do produto 4
DELETE FROM product_variants WHERE product_id = 4;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (4, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (4, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (4, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (4, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 5
UPDATE products SET brand_id = 5 WHERE id = 5;
-- Remove categorias antigas do produto 5
DELETE FROM product_categories WHERE product_id = 5;
INSERT INTO product_categories (product_id, category_id) VALUES (5, 5);
-- Remove tags antigas do produto 5
DELETE FROM product_tags WHERE product_id = 5;
INSERT INTO product_tags (product_id, tag_id) VALUES (5, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (5, 2);
-- Remove variações antigas do produto 5
DELETE FROM product_variants WHERE product_id = 5;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (5, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (5, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (5, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (5, 'Tamanho', 'M', 0.00, 5);