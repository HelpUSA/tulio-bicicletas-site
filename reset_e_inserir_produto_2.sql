
-- Apagar relacionamentos primeiro (devido a restrições de chave estrangeira)
DELETE FROM product_variants;
DELETE FROM product_tags;
DELETE FROM product_categories;
DELETE FROM product_images;

-- Apagar produtos
DELETE FROM products;

-- (Opcional) Apagar marcas, categorias e tags se desejar começar do zero total:
-- DELETE FROM brands;
-- DELETE FROM categories;
-- DELETE FROM tags;


-- Limpar dados antigos do produto
DELETE FROM product_categories WHERE product_id = 2;
DELETE FROM product_tags WHERE product_id = 2;
DELETE FROM product_variants WHERE product_id = 2;
DELETE FROM product_images WHERE product_id = 2;

-- Atualizar produto
UPDATE products
SET
  name = 'Bicicleta Aro 12 Feminina',
  description = 'Bicicleta com quadro e garfo de aço, rodas e acessórios plásticos (indicado para crianças até 3 anos de idade)',
  price = 299.00,
  stock = 10,
  brand_id = 10 -- Warrior (vamos assumir ID 10 como nova marca)
WHERE id = 2;

-- Inserir categoria (Aro 12 - ID 1)
INSERT INTO product_categories (product_id, category_id) VALUES (2, 1);

-- Inserir tag (infantil - ID 1)
INSERT INTO product_tags (product_id, tag_id) VALUES (2, 1);

-- Inserir variação
INSERT INTO product_variants (product_id, name, value, price, stock)
VALUES (2, 'Cor', 'Rosa', 0.00, 10);

-- Inserir imagem
INSERT INTO product_images (product_id, url, alt)
VALUES (
  2,
  'https://tuliobicicletas.helpusa.com.br/img/2-3.png',
  'Imagem Bicicleta Aro 12 Feminina'
);

-- Garantir existência da marca Warrior (ID 10)
INSERT INTO brands (id, name)
VALUES (10, 'Warrior')
ON CONFLICT (id) DO NOTHING;
