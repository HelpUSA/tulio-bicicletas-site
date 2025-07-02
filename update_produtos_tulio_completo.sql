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
-- Atualiza produto 6
UPDATE products SET brand_id = 6 WHERE id = 6;
DELETE FROM product_categories WHERE product_id = 6;
INSERT INTO product_categories (product_id, category_id) VALUES (6, 6);
DELETE FROM product_tags WHERE product_id = 6;
INSERT INTO product_tags (product_id, tag_id) VALUES (6, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (6, 3);
DELETE FROM product_variants WHERE product_id = 6;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (6, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (6, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (6, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (6, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 7
UPDATE products SET brand_id = 7 WHERE id = 7;
DELETE FROM product_categories WHERE product_id = 7;
INSERT INTO product_categories (product_id, category_id) VALUES (7, 7);
DELETE FROM product_tags WHERE product_id = 7;
INSERT INTO product_tags (product_id, tag_id) VALUES (7, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (7, 4);
DELETE FROM product_variants WHERE product_id = 7;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (7, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (7, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (7, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (7, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 8
UPDATE products SET brand_id = 8 WHERE id = 8;
DELETE FROM product_categories WHERE product_id = 8;
INSERT INTO product_categories (product_id, category_id) VALUES (8, 1);
DELETE FROM product_tags WHERE product_id = 8;
INSERT INTO product_tags (product_id, tag_id) VALUES (8, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (8, 1);
DELETE FROM product_variants WHERE product_id = 8;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (8, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (8, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (8, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (8, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 9
UPDATE products SET brand_id = 9 WHERE id = 9;
DELETE FROM product_categories WHERE product_id = 9;
INSERT INTO product_categories (product_id, category_id) VALUES (9, 2);
DELETE FROM product_tags WHERE product_id = 9;
INSERT INTO product_tags (product_id, tag_id) VALUES (9, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (9, 2);
DELETE FROM product_variants WHERE product_id = 9;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (9, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (9, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (9, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (9, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 10
UPDATE products SET brand_id = 1 WHERE id = 10;
DELETE FROM product_categories WHERE product_id = 10;
INSERT INTO product_categories (product_id, category_id) VALUES (10, 3);
DELETE FROM product_tags WHERE product_id = 10;
INSERT INTO product_tags (product_id, tag_id) VALUES (10, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (10, 3);
DELETE FROM product_variants WHERE product_id = 10;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (10, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (10, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (10, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (10, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 11
UPDATE products SET brand_id = 2 WHERE id = 11;
DELETE FROM product_categories WHERE product_id = 11;
INSERT INTO product_categories (product_id, category_id) VALUES (11, 4);
DELETE FROM product_tags WHERE product_id = 11;
INSERT INTO product_tags (product_id, tag_id) VALUES (11, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (11, 4);
DELETE FROM product_variants WHERE product_id = 11;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (11, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (11, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (11, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (11, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 12
UPDATE products SET brand_id = 3 WHERE id = 12;
DELETE FROM product_categories WHERE product_id = 12;
INSERT INTO product_categories (product_id, category_id) VALUES (12, 5);
DELETE FROM product_tags WHERE product_id = 12;
INSERT INTO product_tags (product_id, tag_id) VALUES (12, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (12, 1);
DELETE FROM product_variants WHERE product_id = 12;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (12, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (12, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (12, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (12, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 13
UPDATE products SET brand_id = 4 WHERE id = 13;
DELETE FROM product_categories WHERE product_id = 13;
INSERT INTO product_categories (product_id, category_id) VALUES (13, 6);
DELETE FROM product_tags WHERE product_id = 13;
INSERT INTO product_tags (product_id, tag_id) VALUES (13, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (13, 2);
DELETE FROM product_variants WHERE product_id = 13;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (13, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (13, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (13, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (13, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 14
UPDATE products SET brand_id = 5 WHERE id = 14;
DELETE FROM product_categories WHERE product_id = 14;
INSERT INTO product_categories (product_id, category_id) VALUES (14, 7);
DELETE FROM product_tags WHERE product_id = 14;
INSERT INTO product_tags (product_id, tag_id) VALUES (14, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (14, 3);
DELETE FROM product_variants WHERE product_id = 14;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (14, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (14, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (14, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (14, 'Tamanho', 'M', 0.00, 5);