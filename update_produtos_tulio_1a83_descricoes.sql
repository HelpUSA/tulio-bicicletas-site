-- Atualiza produto 1
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 1' WHERE id = 1;
DELETE FROM product_categories WHERE product_id = 1;
INSERT INTO product_categories (product_id, category_id) VALUES (1, 1);
DELETE FROM product_tags WHERE product_id = 1;
INSERT INTO product_tags (product_id, tag_id) VALUES (1, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (1, 2);
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
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 2' WHERE id = 2;
DELETE FROM product_categories WHERE product_id = 2;
INSERT INTO product_categories (product_id, category_id) VALUES (2, 2);
DELETE FROM product_tags WHERE product_id = 2;
INSERT INTO product_tags (product_id, tag_id) VALUES (2, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (2, 3);
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
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 3' WHERE id = 3;
DELETE FROM product_categories WHERE product_id = 3;
INSERT INTO product_categories (product_id, category_id) VALUES (3, 3);
DELETE FROM product_tags WHERE product_id = 3;
INSERT INTO product_tags (product_id, tag_id) VALUES (3, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (3, 4);
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
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 4' WHERE id = 4;
DELETE FROM product_categories WHERE product_id = 4;
INSERT INTO product_categories (product_id, category_id) VALUES (4, 4);
DELETE FROM product_tags WHERE product_id = 4;
INSERT INTO product_tags (product_id, tag_id) VALUES (4, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (4, 1);
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
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 5' WHERE id = 5;
DELETE FROM product_categories WHERE product_id = 5;
INSERT INTO product_categories (product_id, category_id) VALUES (5, 5);
DELETE FROM product_tags WHERE product_id = 5;
INSERT INTO product_tags (product_id, tag_id) VALUES (5, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (5, 2);
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
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 6' WHERE id = 6;
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
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 7' WHERE id = 7;
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
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 8' WHERE id = 8;
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
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 9' WHERE id = 9;
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
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 10' WHERE id = 10;
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
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 11' WHERE id = 11;
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
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 12' WHERE id = 12;
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
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 13' WHERE id = 13;
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
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 14' WHERE id = 14;
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
-- Atualiza produto 15
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 15' WHERE id = 15;
DELETE FROM product_categories WHERE product_id = 15;
INSERT INTO product_categories (product_id, category_id) VALUES (15, 1);
DELETE FROM product_tags WHERE product_id = 15;
INSERT INTO product_tags (product_id, tag_id) VALUES (15, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (15, 4);
DELETE FROM product_variants WHERE product_id = 15;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (15, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (15, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (15, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (15, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 16
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 16' WHERE id = 16;
DELETE FROM product_categories WHERE product_id = 16;
INSERT INTO product_categories (product_id, category_id) VALUES (16, 2);
DELETE FROM product_tags WHERE product_id = 16;
INSERT INTO product_tags (product_id, tag_id) VALUES (16, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (16, 1);
DELETE FROM product_variants WHERE product_id = 16;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (16, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (16, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (16, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (16, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 17
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 17' WHERE id = 17;
DELETE FROM product_categories WHERE product_id = 17;
INSERT INTO product_categories (product_id, category_id) VALUES (17, 3);
DELETE FROM product_tags WHERE product_id = 17;
INSERT INTO product_tags (product_id, tag_id) VALUES (17, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (17, 2);
DELETE FROM product_variants WHERE product_id = 17;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (17, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (17, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (17, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (17, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 18
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 18' WHERE id = 18;
DELETE FROM product_categories WHERE product_id = 18;
INSERT INTO product_categories (product_id, category_id) VALUES (18, 4);
DELETE FROM product_tags WHERE product_id = 18;
INSERT INTO product_tags (product_id, tag_id) VALUES (18, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (18, 3);
DELETE FROM product_variants WHERE product_id = 18;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (18, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (18, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (18, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (18, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 19
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 19' WHERE id = 19;
DELETE FROM product_categories WHERE product_id = 19;
INSERT INTO product_categories (product_id, category_id) VALUES (19, 5);
DELETE FROM product_tags WHERE product_id = 19;
INSERT INTO product_tags (product_id, tag_id) VALUES (19, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (19, 4);
DELETE FROM product_variants WHERE product_id = 19;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (19, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (19, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (19, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (19, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 20
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 20' WHERE id = 20;
DELETE FROM product_categories WHERE product_id = 20;
INSERT INTO product_categories (product_id, category_id) VALUES (20, 6);
DELETE FROM product_tags WHERE product_id = 20;
INSERT INTO product_tags (product_id, tag_id) VALUES (20, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (20, 1);
DELETE FROM product_variants WHERE product_id = 20;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (20, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (20, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (20, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (20, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 21
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 21' WHERE id = 21;
DELETE FROM product_categories WHERE product_id = 21;
INSERT INTO product_categories (product_id, category_id) VALUES (21, 7);
DELETE FROM product_tags WHERE product_id = 21;
INSERT INTO product_tags (product_id, tag_id) VALUES (21, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (21, 2);
DELETE FROM product_variants WHERE product_id = 21;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (21, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (21, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (21, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (21, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 22
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 22' WHERE id = 22;
DELETE FROM product_categories WHERE product_id = 22;
INSERT INTO product_categories (product_id, category_id) VALUES (22, 1);
DELETE FROM product_tags WHERE product_id = 22;
INSERT INTO product_tags (product_id, tag_id) VALUES (22, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (22, 3);
DELETE FROM product_variants WHERE product_id = 22;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (22, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (22, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (22, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (22, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 23
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 23' WHERE id = 23;
DELETE FROM product_categories WHERE product_id = 23;
INSERT INTO product_categories (product_id, category_id) VALUES (23, 2);
DELETE FROM product_tags WHERE product_id = 23;
INSERT INTO product_tags (product_id, tag_id) VALUES (23, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (23, 4);
DELETE FROM product_variants WHERE product_id = 23;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (23, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (23, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (23, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (23, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 24
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 24' WHERE id = 24;
DELETE FROM product_categories WHERE product_id = 24;
INSERT INTO product_categories (product_id, category_id) VALUES (24, 3);
DELETE FROM product_tags WHERE product_id = 24;
INSERT INTO product_tags (product_id, tag_id) VALUES (24, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (24, 1);
DELETE FROM product_variants WHERE product_id = 24;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (24, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (24, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (24, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (24, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 25
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 25' WHERE id = 25;
DELETE FROM product_categories WHERE product_id = 25;
INSERT INTO product_categories (product_id, category_id) VALUES (25, 4);
DELETE FROM product_tags WHERE product_id = 25;
INSERT INTO product_tags (product_id, tag_id) VALUES (25, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (25, 2);
DELETE FROM product_variants WHERE product_id = 25;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (25, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (25, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (25, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (25, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 26
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 26' WHERE id = 26;
DELETE FROM product_categories WHERE product_id = 26;
INSERT INTO product_categories (product_id, category_id) VALUES (26, 5);
DELETE FROM product_tags WHERE product_id = 26;
INSERT INTO product_tags (product_id, tag_id) VALUES (26, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (26, 3);
DELETE FROM product_variants WHERE product_id = 26;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (26, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (26, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (26, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (26, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 27
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 27' WHERE id = 27;
DELETE FROM product_categories WHERE product_id = 27;
INSERT INTO product_categories (product_id, category_id) VALUES (27, 6);
DELETE FROM product_tags WHERE product_id = 27;
INSERT INTO product_tags (product_id, tag_id) VALUES (27, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (27, 4);
DELETE FROM product_variants WHERE product_id = 27;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (27, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (27, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (27, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (27, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 28
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 28' WHERE id = 28;
DELETE FROM product_categories WHERE product_id = 28;
INSERT INTO product_categories (product_id, category_id) VALUES (28, 7);
DELETE FROM product_tags WHERE product_id = 28;
INSERT INTO product_tags (product_id, tag_id) VALUES (28, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (28, 1);
DELETE FROM product_variants WHERE product_id = 28;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (28, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (28, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (28, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (28, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 29
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 29' WHERE id = 29;
DELETE FROM product_categories WHERE product_id = 29;
INSERT INTO product_categories (product_id, category_id) VALUES (29, 1);
DELETE FROM product_tags WHERE product_id = 29;
INSERT INTO product_tags (product_id, tag_id) VALUES (29, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (29, 2);
DELETE FROM product_variants WHERE product_id = 29;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (29, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (29, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (29, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (29, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 30
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 30' WHERE id = 30;
DELETE FROM product_categories WHERE product_id = 30;
INSERT INTO product_categories (product_id, category_id) VALUES (30, 2);
DELETE FROM product_tags WHERE product_id = 30;
INSERT INTO product_tags (product_id, tag_id) VALUES (30, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (30, 3);
DELETE FROM product_variants WHERE product_id = 30;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (30, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (30, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (30, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (30, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 31
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 31' WHERE id = 31;
DELETE FROM product_categories WHERE product_id = 31;
INSERT INTO product_categories (product_id, category_id) VALUES (31, 3);
DELETE FROM product_tags WHERE product_id = 31;
INSERT INTO product_tags (product_id, tag_id) VALUES (31, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (31, 4);
DELETE FROM product_variants WHERE product_id = 31;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (31, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (31, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (31, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (31, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 32
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 32' WHERE id = 32;
DELETE FROM product_categories WHERE product_id = 32;
INSERT INTO product_categories (product_id, category_id) VALUES (32, 4);
DELETE FROM product_tags WHERE product_id = 32;
INSERT INTO product_tags (product_id, tag_id) VALUES (32, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (32, 1);
DELETE FROM product_variants WHERE product_id = 32;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (32, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (32, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (32, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (32, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 33
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 33' WHERE id = 33;
DELETE FROM product_categories WHERE product_id = 33;
INSERT INTO product_categories (product_id, category_id) VALUES (33, 5);
DELETE FROM product_tags WHERE product_id = 33;
INSERT INTO product_tags (product_id, tag_id) VALUES (33, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (33, 2);
DELETE FROM product_variants WHERE product_id = 33;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (33, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (33, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (33, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (33, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 34
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 34' WHERE id = 34;
DELETE FROM product_categories WHERE product_id = 34;
INSERT INTO product_categories (product_id, category_id) VALUES (34, 6);
DELETE FROM product_tags WHERE product_id = 34;
INSERT INTO product_tags (product_id, tag_id) VALUES (34, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (34, 3);
DELETE FROM product_variants WHERE product_id = 34;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (34, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (34, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (34, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (34, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 35
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 35' WHERE id = 35;
DELETE FROM product_categories WHERE product_id = 35;
INSERT INTO product_categories (product_id, category_id) VALUES (35, 7);
DELETE FROM product_tags WHERE product_id = 35;
INSERT INTO product_tags (product_id, tag_id) VALUES (35, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (35, 4);
DELETE FROM product_variants WHERE product_id = 35;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (35, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (35, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (35, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (35, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 36
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 36' WHERE id = 36;
DELETE FROM product_categories WHERE product_id = 36;
INSERT INTO product_categories (product_id, category_id) VALUES (36, 1);
DELETE FROM product_tags WHERE product_id = 36;
INSERT INTO product_tags (product_id, tag_id) VALUES (36, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (36, 1);
DELETE FROM product_variants WHERE product_id = 36;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (36, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (36, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (36, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (36, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 37
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 37' WHERE id = 37;
DELETE FROM product_categories WHERE product_id = 37;
INSERT INTO product_categories (product_id, category_id) VALUES (37, 2);
DELETE FROM product_tags WHERE product_id = 37;
INSERT INTO product_tags (product_id, tag_id) VALUES (37, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (37, 2);
DELETE FROM product_variants WHERE product_id = 37;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (37, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (37, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (37, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (37, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 38
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 38' WHERE id = 38;
DELETE FROM product_categories WHERE product_id = 38;
INSERT INTO product_categories (product_id, category_id) VALUES (38, 3);
DELETE FROM product_tags WHERE product_id = 38;
INSERT INTO product_tags (product_id, tag_id) VALUES (38, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (38, 3);
DELETE FROM product_variants WHERE product_id = 38;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (38, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (38, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (38, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (38, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 39
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 39' WHERE id = 39;
DELETE FROM product_categories WHERE product_id = 39;
INSERT INTO product_categories (product_id, category_id) VALUES (39, 4);
DELETE FROM product_tags WHERE product_id = 39;
INSERT INTO product_tags (product_id, tag_id) VALUES (39, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (39, 4);
DELETE FROM product_variants WHERE product_id = 39;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (39, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (39, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (39, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (39, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 40
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 40' WHERE id = 40;
DELETE FROM product_categories WHERE product_id = 40;
INSERT INTO product_categories (product_id, category_id) VALUES (40, 5);
DELETE FROM product_tags WHERE product_id = 40;
INSERT INTO product_tags (product_id, tag_id) VALUES (40, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (40, 1);
DELETE FROM product_variants WHERE product_id = 40;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (40, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (40, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (40, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (40, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 41
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 41' WHERE id = 41;
DELETE FROM product_categories WHERE product_id = 41;
INSERT INTO product_categories (product_id, category_id) VALUES (41, 6);
DELETE FROM product_tags WHERE product_id = 41;
INSERT INTO product_tags (product_id, tag_id) VALUES (41, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (41, 2);
DELETE FROM product_variants WHERE product_id = 41;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (41, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (41, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (41, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (41, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 42
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 42' WHERE id = 42;
DELETE FROM product_categories WHERE product_id = 42;
INSERT INTO product_categories (product_id, category_id) VALUES (42, 7);
DELETE FROM product_tags WHERE product_id = 42;
INSERT INTO product_tags (product_id, tag_id) VALUES (42, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (42, 3);
DELETE FROM product_variants WHERE product_id = 42;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (42, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (42, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (42, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (42, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 43
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 43' WHERE id = 43;
DELETE FROM product_categories WHERE product_id = 43;
INSERT INTO product_categories (product_id, category_id) VALUES (43, 1);
DELETE FROM product_tags WHERE product_id = 43;
INSERT INTO product_tags (product_id, tag_id) VALUES (43, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (43, 4);
DELETE FROM product_variants WHERE product_id = 43;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (43, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (43, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (43, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (43, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 44
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 44' WHERE id = 44;
DELETE FROM product_categories WHERE product_id = 44;
INSERT INTO product_categories (product_id, category_id) VALUES (44, 2);
DELETE FROM product_tags WHERE product_id = 44;
INSERT INTO product_tags (product_id, tag_id) VALUES (44, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (44, 1);
DELETE FROM product_variants WHERE product_id = 44;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (44, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (44, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (44, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (44, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 45
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 45' WHERE id = 45;
DELETE FROM product_categories WHERE product_id = 45;
INSERT INTO product_categories (product_id, category_id) VALUES (45, 3);
DELETE FROM product_tags WHERE product_id = 45;
INSERT INTO product_tags (product_id, tag_id) VALUES (45, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (45, 2);
DELETE FROM product_variants WHERE product_id = 45;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (45, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (45, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (45, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (45, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 46
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 46' WHERE id = 46;
DELETE FROM product_categories WHERE product_id = 46;
INSERT INTO product_categories (product_id, category_id) VALUES (46, 4);
DELETE FROM product_tags WHERE product_id = 46;
INSERT INTO product_tags (product_id, tag_id) VALUES (46, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (46, 3);
DELETE FROM product_variants WHERE product_id = 46;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (46, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (46, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (46, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (46, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 47
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 47' WHERE id = 47;
DELETE FROM product_categories WHERE product_id = 47;
INSERT INTO product_categories (product_id, category_id) VALUES (47, 5);
DELETE FROM product_tags WHERE product_id = 47;
INSERT INTO product_tags (product_id, tag_id) VALUES (47, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (47, 4);
DELETE FROM product_variants WHERE product_id = 47;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (47, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (47, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (47, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (47, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 48
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 48' WHERE id = 48;
DELETE FROM product_categories WHERE product_id = 48;
INSERT INTO product_categories (product_id, category_id) VALUES (48, 6);
DELETE FROM product_tags WHERE product_id = 48;
INSERT INTO product_tags (product_id, tag_id) VALUES (48, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (48, 1);
DELETE FROM product_variants WHERE product_id = 48;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (48, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (48, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (48, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (48, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 49
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 49' WHERE id = 49;
DELETE FROM product_categories WHERE product_id = 49;
INSERT INTO product_categories (product_id, category_id) VALUES (49, 7);
DELETE FROM product_tags WHERE product_id = 49;
INSERT INTO product_tags (product_id, tag_id) VALUES (49, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (49, 2);
DELETE FROM product_variants WHERE product_id = 49;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (49, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (49, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (49, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (49, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 50
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 50' WHERE id = 50;
DELETE FROM product_categories WHERE product_id = 50;
INSERT INTO product_categories (product_id, category_id) VALUES (50, 1);
DELETE FROM product_tags WHERE product_id = 50;
INSERT INTO product_tags (product_id, tag_id) VALUES (50, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (50, 3);
DELETE FROM product_variants WHERE product_id = 50;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (50, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (50, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (50, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (50, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 51
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 51' WHERE id = 51;
DELETE FROM product_categories WHERE product_id = 51;
INSERT INTO product_categories (product_id, category_id) VALUES (51, 2);
DELETE FROM product_tags WHERE product_id = 51;
INSERT INTO product_tags (product_id, tag_id) VALUES (51, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (51, 4);
DELETE FROM product_variants WHERE product_id = 51;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (51, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (51, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (51, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (51, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 52
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 52' WHERE id = 52;
DELETE FROM product_categories WHERE product_id = 52;
INSERT INTO product_categories (product_id, category_id) VALUES (52, 3);
DELETE FROM product_tags WHERE product_id = 52;
INSERT INTO product_tags (product_id, tag_id) VALUES (52, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (52, 1);
DELETE FROM product_variants WHERE product_id = 52;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (52, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (52, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (52, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (52, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 53
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 53' WHERE id = 53;
DELETE FROM product_categories WHERE product_id = 53;
INSERT INTO product_categories (product_id, category_id) VALUES (53, 4);
DELETE FROM product_tags WHERE product_id = 53;
INSERT INTO product_tags (product_id, tag_id) VALUES (53, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (53, 2);
DELETE FROM product_variants WHERE product_id = 53;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (53, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (53, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (53, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (53, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 54
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 54' WHERE id = 54;
DELETE FROM product_categories WHERE product_id = 54;
INSERT INTO product_categories (product_id, category_id) VALUES (54, 5);
DELETE FROM product_tags WHERE product_id = 54;
INSERT INTO product_tags (product_id, tag_id) VALUES (54, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (54, 3);
DELETE FROM product_variants WHERE product_id = 54;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (54, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (54, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (54, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (54, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 55
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 55' WHERE id = 55;
DELETE FROM product_categories WHERE product_id = 55;
INSERT INTO product_categories (product_id, category_id) VALUES (55, 6);
DELETE FROM product_tags WHERE product_id = 55;
INSERT INTO product_tags (product_id, tag_id) VALUES (55, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (55, 4);
DELETE FROM product_variants WHERE product_id = 55;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (55, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (55, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (55, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (55, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 56
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 56' WHERE id = 56;
DELETE FROM product_categories WHERE product_id = 56;
INSERT INTO product_categories (product_id, category_id) VALUES (56, 7);
DELETE FROM product_tags WHERE product_id = 56;
INSERT INTO product_tags (product_id, tag_id) VALUES (56, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (56, 1);
DELETE FROM product_variants WHERE product_id = 56;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (56, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (56, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (56, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (56, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 57
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 57' WHERE id = 57;
DELETE FROM product_categories WHERE product_id = 57;
INSERT INTO product_categories (product_id, category_id) VALUES (57, 1);
DELETE FROM product_tags WHERE product_id = 57;
INSERT INTO product_tags (product_id, tag_id) VALUES (57, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (57, 2);
DELETE FROM product_variants WHERE product_id = 57;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (57, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (57, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (57, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (57, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 58
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 58' WHERE id = 58;
DELETE FROM product_categories WHERE product_id = 58;
INSERT INTO product_categories (product_id, category_id) VALUES (58, 2);
DELETE FROM product_tags WHERE product_id = 58;
INSERT INTO product_tags (product_id, tag_id) VALUES (58, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (58, 3);
DELETE FROM product_variants WHERE product_id = 58;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (58, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (58, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (58, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (58, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 59
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 59' WHERE id = 59;
DELETE FROM product_categories WHERE product_id = 59;
INSERT INTO product_categories (product_id, category_id) VALUES (59, 3);
DELETE FROM product_tags WHERE product_id = 59;
INSERT INTO product_tags (product_id, tag_id) VALUES (59, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (59, 4);
DELETE FROM product_variants WHERE product_id = 59;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (59, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (59, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (59, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (59, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 60
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 60' WHERE id = 60;
DELETE FROM product_categories WHERE product_id = 60;
INSERT INTO product_categories (product_id, category_id) VALUES (60, 4);
DELETE FROM product_tags WHERE product_id = 60;
INSERT INTO product_tags (product_id, tag_id) VALUES (60, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (60, 1);
DELETE FROM product_variants WHERE product_id = 60;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (60, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (60, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (60, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (60, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 61
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 61' WHERE id = 61;
DELETE FROM product_categories WHERE product_id = 61;
INSERT INTO product_categories (product_id, category_id) VALUES (61, 5);
DELETE FROM product_tags WHERE product_id = 61;
INSERT INTO product_tags (product_id, tag_id) VALUES (61, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (61, 2);
DELETE FROM product_variants WHERE product_id = 61;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (61, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (61, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (61, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (61, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 62
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 62' WHERE id = 62;
DELETE FROM product_categories WHERE product_id = 62;
INSERT INTO product_categories (product_id, category_id) VALUES (62, 6);
DELETE FROM product_tags WHERE product_id = 62;
INSERT INTO product_tags (product_id, tag_id) VALUES (62, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (62, 3);
DELETE FROM product_variants WHERE product_id = 62;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (62, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (62, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (62, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (62, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 63
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 63' WHERE id = 63;
DELETE FROM product_categories WHERE product_id = 63;
INSERT INTO product_categories (product_id, category_id) VALUES (63, 7);
DELETE FROM product_tags WHERE product_id = 63;
INSERT INTO product_tags (product_id, tag_id) VALUES (63, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (63, 4);
DELETE FROM product_variants WHERE product_id = 63;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (63, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (63, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (63, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (63, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 64
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 64' WHERE id = 64;
DELETE FROM product_categories WHERE product_id = 64;
INSERT INTO product_categories (product_id, category_id) VALUES (64, 1);
DELETE FROM product_tags WHERE product_id = 64;
INSERT INTO product_tags (product_id, tag_id) VALUES (64, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (64, 1);
DELETE FROM product_variants WHERE product_id = 64;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (64, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (64, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (64, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (64, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 65
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 65' WHERE id = 65;
DELETE FROM product_categories WHERE product_id = 65;
INSERT INTO product_categories (product_id, category_id) VALUES (65, 2);
DELETE FROM product_tags WHERE product_id = 65;
INSERT INTO product_tags (product_id, tag_id) VALUES (65, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (65, 2);
DELETE FROM product_variants WHERE product_id = 65;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (65, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (65, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (65, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (65, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 66
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 66' WHERE id = 66;
DELETE FROM product_categories WHERE product_id = 66;
INSERT INTO product_categories (product_id, category_id) VALUES (66, 3);
DELETE FROM product_tags WHERE product_id = 66;
INSERT INTO product_tags (product_id, tag_id) VALUES (66, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (66, 3);
DELETE FROM product_variants WHERE product_id = 66;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (66, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (66, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (66, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (66, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 67
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 67' WHERE id = 67;
DELETE FROM product_categories WHERE product_id = 67;
INSERT INTO product_categories (product_id, category_id) VALUES (67, 4);
DELETE FROM product_tags WHERE product_id = 67;
INSERT INTO product_tags (product_id, tag_id) VALUES (67, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (67, 4);
DELETE FROM product_variants WHERE product_id = 67;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (67, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (67, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (67, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (67, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 68
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 68' WHERE id = 68;
DELETE FROM product_categories WHERE product_id = 68;
INSERT INTO product_categories (product_id, category_id) VALUES (68, 5);
DELETE FROM product_tags WHERE product_id = 68;
INSERT INTO product_tags (product_id, tag_id) VALUES (68, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (68, 1);
DELETE FROM product_variants WHERE product_id = 68;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (68, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (68, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (68, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (68, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 69
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 69' WHERE id = 69;
DELETE FROM product_categories WHERE product_id = 69;
INSERT INTO product_categories (product_id, category_id) VALUES (69, 6);
DELETE FROM product_tags WHERE product_id = 69;
INSERT INTO product_tags (product_id, tag_id) VALUES (69, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (69, 2);
DELETE FROM product_variants WHERE product_id = 69;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (69, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (69, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (69, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (69, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 70
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 70' WHERE id = 70;
DELETE FROM product_categories WHERE product_id = 70;
INSERT INTO product_categories (product_id, category_id) VALUES (70, 7);
DELETE FROM product_tags WHERE product_id = 70;
INSERT INTO product_tags (product_id, tag_id) VALUES (70, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (70, 3);
DELETE FROM product_variants WHERE product_id = 70;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (70, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (70, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (70, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (70, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 71
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 71' WHERE id = 71;
DELETE FROM product_categories WHERE product_id = 71;
INSERT INTO product_categories (product_id, category_id) VALUES (71, 1);
DELETE FROM product_tags WHERE product_id = 71;
INSERT INTO product_tags (product_id, tag_id) VALUES (71, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (71, 4);
DELETE FROM product_variants WHERE product_id = 71;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (71, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (71, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (71, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (71, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 72
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 72' WHERE id = 72;
DELETE FROM product_categories WHERE product_id = 72;
INSERT INTO product_categories (product_id, category_id) VALUES (72, 2);
DELETE FROM product_tags WHERE product_id = 72;
INSERT INTO product_tags (product_id, tag_id) VALUES (72, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (72, 1);
DELETE FROM product_variants WHERE product_id = 72;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (72, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (72, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (72, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (72, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 73
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 73' WHERE id = 73;
DELETE FROM product_categories WHERE product_id = 73;
INSERT INTO product_categories (product_id, category_id) VALUES (73, 3);
DELETE FROM product_tags WHERE product_id = 73;
INSERT INTO product_tags (product_id, tag_id) VALUES (73, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (73, 2);
DELETE FROM product_variants WHERE product_id = 73;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (73, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (73, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (73, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (73, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 74
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 74' WHERE id = 74;
DELETE FROM product_categories WHERE product_id = 74;
INSERT INTO product_categories (product_id, category_id) VALUES (74, 4);
DELETE FROM product_tags WHERE product_id = 74;
INSERT INTO product_tags (product_id, tag_id) VALUES (74, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (74, 3);
DELETE FROM product_variants WHERE product_id = 74;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (74, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (74, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (74, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (74, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 75
UPDATE products SET brand_id = 3, description = 'Bicicleta de alta qualidade - modelo 75' WHERE id = 75;
DELETE FROM product_categories WHERE product_id = 75;
INSERT INTO product_categories (product_id, category_id) VALUES (75, 5);
DELETE FROM product_tags WHERE product_id = 75;
INSERT INTO product_tags (product_id, tag_id) VALUES (75, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (75, 4);
DELETE FROM product_variants WHERE product_id = 75;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (75, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (75, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (75, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (75, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 76
UPDATE products SET brand_id = 4, description = 'Bicicleta de alta qualidade - modelo 76' WHERE id = 76;
DELETE FROM product_categories WHERE product_id = 76;
INSERT INTO product_categories (product_id, category_id) VALUES (76, 6);
DELETE FROM product_tags WHERE product_id = 76;
INSERT INTO product_tags (product_id, tag_id) VALUES (76, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (76, 1);
DELETE FROM product_variants WHERE product_id = 76;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (76, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (76, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (76, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (76, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 77
UPDATE products SET brand_id = 5, description = 'Bicicleta de alta qualidade - modelo 77' WHERE id = 77;
DELETE FROM product_categories WHERE product_id = 77;
INSERT INTO product_categories (product_id, category_id) VALUES (77, 7);
DELETE FROM product_tags WHERE product_id = 77;
INSERT INTO product_tags (product_id, tag_id) VALUES (77, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (77, 2);
DELETE FROM product_variants WHERE product_id = 77;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (77, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (77, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (77, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (77, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 78
UPDATE products SET brand_id = 6, description = 'Bicicleta de alta qualidade - modelo 78' WHERE id = 78;
DELETE FROM product_categories WHERE product_id = 78;
INSERT INTO product_categories (product_id, category_id) VALUES (78, 1);
DELETE FROM product_tags WHERE product_id = 78;
INSERT INTO product_tags (product_id, tag_id) VALUES (78, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (78, 3);
DELETE FROM product_variants WHERE product_id = 78;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (78, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (78, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (78, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (78, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 79
UPDATE products SET brand_id = 7, description = 'Bicicleta de alta qualidade - modelo 79' WHERE id = 79;
DELETE FROM product_categories WHERE product_id = 79;
INSERT INTO product_categories (product_id, category_id) VALUES (79, 2);
DELETE FROM product_tags WHERE product_id = 79;
INSERT INTO product_tags (product_id, tag_id) VALUES (79, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (79, 4);
DELETE FROM product_variants WHERE product_id = 79;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (79, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (79, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (79, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (79, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 80
UPDATE products SET brand_id = 8, description = 'Bicicleta de alta qualidade - modelo 80' WHERE id = 80;
DELETE FROM product_categories WHERE product_id = 80;
INSERT INTO product_categories (product_id, category_id) VALUES (80, 3);
DELETE FROM product_tags WHERE product_id = 80;
INSERT INTO product_tags (product_id, tag_id) VALUES (80, 4);
INSERT INTO product_tags (product_id, tag_id) VALUES (80, 1);
DELETE FROM product_variants WHERE product_id = 80;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (80, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (80, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (80, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (80, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 81
UPDATE products SET brand_id = 9, description = 'Bicicleta de alta qualidade - modelo 81' WHERE id = 81;
DELETE FROM product_categories WHERE product_id = 81;
INSERT INTO product_categories (product_id, category_id) VALUES (81, 4);
DELETE FROM product_tags WHERE product_id = 81;
INSERT INTO product_tags (product_id, tag_id) VALUES (81, 1);
INSERT INTO product_tags (product_id, tag_id) VALUES (81, 2);
DELETE FROM product_variants WHERE product_id = 81;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (81, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (81, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (81, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (81, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 82
UPDATE products SET brand_id = 1, description = 'Bicicleta de alta qualidade - modelo 82' WHERE id = 82;
DELETE FROM product_categories WHERE product_id = 82;
INSERT INTO product_categories (product_id, category_id) VALUES (82, 5);
DELETE FROM product_tags WHERE product_id = 82;
INSERT INTO product_tags (product_id, tag_id) VALUES (82, 2);
INSERT INTO product_tags (product_id, tag_id) VALUES (82, 3);
DELETE FROM product_variants WHERE product_id = 82;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (82, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (82, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (82, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (82, 'Tamanho', 'M', 0.00, 5);
-- Atualiza produto 83
UPDATE products SET brand_id = 2, description = 'Bicicleta de alta qualidade - modelo 83' WHERE id = 83;
DELETE FROM product_categories WHERE product_id = 83;
INSERT INTO product_categories (product_id, category_id) VALUES (83, 6);
DELETE FROM product_tags WHERE product_id = 83;
INSERT INTO product_tags (product_id, tag_id) VALUES (83, 3);
INSERT INTO product_tags (product_id, tag_id) VALUES (83, 4);
DELETE FROM product_variants WHERE product_id = 83;
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (83, 'Cor', 'Vermelho', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (83, 'Cor', 'Azul', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (83, 'Tamanho', 'P', 0.00, 5);
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (83, 'Tamanho', 'M', 0.00, 5);