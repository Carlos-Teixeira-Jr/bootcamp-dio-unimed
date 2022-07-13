/* CRIANDO TABELA */
CREATE TABLE pessoas (
  id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(30) NOT NULL,
  nascimento DATE
)

/* INSERINDO DADOS NA TABELA */
INSERT INTO pessoas (nome, nascimento) VALUES ('Carlos', '1988 01 24')
INSERT INTO pessoas (nome, nascimento) VALUES ('Fernando', '1990 0
3 28')
INSERT INTO pessoas (nome, nascimento) VALUES ('Andréia', '2000 10 02')

/* ATUALIZANDO DADOS DA TABELA */
UPDATE pessoas SET nome='Fernando' WHERE id=2

/* DELETAR */
DELETE FROM pessoas WHERE id=2

/* AGRUPAMENTO */
SELECT FROM pessoa ORDER BY nome;
SELECT FROM pessoa ORDER BY nome DESC;

/* ALTERAR TABELA */
ALTER TABLE pessoa ADD GENERO VARCHAR(1) NOT NULL AFTER nascimento; 

/* AGRUPANDO */
SELECT COUNT(genero), genero FROM pessoa GROUP BY genero;

/* EXERCÍCIO BANCO DE DADOS YT */
CREATE TABLE videos (
  id_video INT NOT NULL PRIMARY KEY AUTO_INCREMENT
  author VARCHAR(10) NOT NULL
  title VARCHAR(10) NOT NULL
  likes INT
  dislikes INT
)

INSERT INTO videos (author, title, likes, dislikes) VALUES ('Maria', 'MySQL', 10, 2);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('João', 'HTML', 10, 1);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('Maria', 'CSS', 18, 3);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('Pedro', 'Javascript', 15, 11);
INSERT INTO videos (author, title, likes, dislikes) VALUES ('Maria', 'Python', 50, 0);

CREATE TABLE author (
  id_author INT NOT NULL PRIMARY KEY AUTO_INCREMENT
  name VARCHAR 30 NOT NULL
  born DATE
)

INSERT INTO author (name, born) VALUES ('Maria', '1992 04 19');
INSERT INTO author (name, born) VALUES ('Pedro', '1988 12 12');
INSERT INTO author (name, born) VALUES ('João', '1998 03 09');
INSERT INTO author (name, born) VALUES ('Flávia', '2008 07 05');

UPDATE videos SET author='';



