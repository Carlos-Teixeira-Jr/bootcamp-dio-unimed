/* CONSULTA ENTRE MULTIPLAS TABELAS USANDO APELIDO */
select * from videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video;

/* CONSULTA ENTRE MULTIPLAS TABELAS TRAZENDO TODOS OS ATRIBUTOS */
select * from videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* CONSULTA ENTRE MULTIPLAS TABELAS ESPECIFICANDO OS ATRIBUTOS DESEJADOS */
select v.nome_video, v.autor_video, c.nome_canal 
from videos_canais AS vc JOIN videos AS v ON vc.fk_video = v.id_video
JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* OUTER JOIN */
select * from videos_canais AS vc RIGHT OUTER JOIN videos AS v ON vc.fk_video = v.id_video
RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* UNION */
SELECT v.id_video, v.nome_video FROM videos AS v LEFT OUTER JOIN videos_canais AS vc ON v.id_video = vc.fk_video
UNION
SELECT c.id_canal, c.nome_canal FROM videos_canais AS vc RIGHT OUTER JOIN canais AS c ON vc.fk_canal = c.id_canal;

/* CONSULTA SIMPLES COM JOIN */
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal;

/* FILTRAGEM DA CONSULTA COM WHERE */
SELECT * FROM videos_canais JOIN videos ON videos_canais.fk_video = videos.id_video
JOIN canais ON videos_canais.fk_canal = canais.id_canal
WHERE canais.id_canal = 2;
