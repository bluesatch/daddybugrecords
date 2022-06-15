INSERT INTO artist 
    (lName, fName, alias)
    VALUES ('porter', 'gregory', NULL),
    ('younge', 'adrian', NULL),
    ('ross', 'diana', NULL),
    ('kuti', 'fela', NULL),
    ('fareed', 'kamaal', 'q-tip'),
    ('taylor', 'malik', 'phife dawg'),
    ('muhammad', 'ali shaheed', NULL),
    ('davis', 'miles', NULL),
    ('coltrane', 'john', NULL),
    ('adderley', 'julian', 'cannonball'),
    ('cobb', 'jimmy', NULL),
    ('evans', 'bill', NULL),
    ('kelly', 'wynton', NULL),
    ('chambers', 'paul', NULL),
    ('anderson', 'paak', 'anderson .paak');

INSERT INTO genre (genre) VALUES 
('hip hop'), ('blues'), ('rock'), ('country'), ('r&b'), ('pop'), ('jazz'), ('bebop'), ('fusion'), ('disco'), ('dance'), ('electronic'), ('rap'), ('soul'), ('afrobeat'), ('post bop'), ('folk'), ('funk'), ('soundtrack'), ('world'), ('gospel'), ('christian'), ('comedy');

INSERT INTO artist (lName, fName) VALUES 
('osbourne', 'ozzy'),
('iommi', 'tony'),
('butler', 'geezer'),
('ward', 'bill'),
('allom', 'tom');

INSERT INTO band (band) VALUES 
('gregory porter'), ('adrian younge'), ('the allman brothers'), ('diana ross'), ('fela kuti'), ('miles davis'), ('a tribe called quest'), ('anderson .paak'), ('black sabbath');

INSERT INTO label (label) VALUES 
('blue note'),
('columbia'),
('cti'),
('def jam'),
('interscope'),
('jive'),
('atlantic'),
('elektra'),
('milestone'),
('capricorn records'),
('motema'),
('paytone'),
('linear labs'),
('wax poetics'),
('impulse'),
('hidden beach'),
('motown'),
('stax'),
('geffen'),
('good music'),
('mca'),
('warner bros'),
('curtom'),
('knitting factory'),
('casablanca'),
('mercury'),
('solar'),
('cash money'),
('no limit'),
('priority'),
('loud'),
('polydor');

INSERT INTO ALBUM (title, band_id, label_id, year, img, price)
VALUES ('low end theory', 7, 6, 1991, 'https://i.discogs.com/0vsUcaRAVfieBEU_WtyXprYlEj_qZuWVrh05rqsEQlQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTg3ODAw/OTItMTQ2ODYxMzcz/Ny03NTkwLmpwZWc.jpeg', 36.87),
('oxnard', 8, 5, 2019, 'https://i.discogs.com/aL5bVWpj_6Onrjh5UigmqziJ3Rx5JvqVpe-WtSgB5ew/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDg0/MzE2LTE1NDg2MTA5/OTMtOTAwMi5qcGVn.jpeg', 56.95),
('paranoid', 9, 22, 1971, 'https://i.discogs.com/DQsPX89HSzj-aZA66CaMLGIdoCfH6gbgXdRac8KCujY/rs:fit/g:sm/q:90/h:600/w:593/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NDE4/NS0xMzU5NDk5Njky/LTMwNTUuanBlZw.jpeg', 20.00)
;

INSERT INTO artist (lName, fName) VALUES ('silver', 'horace');
INSERT INTO band (band) VALUES ('horace silver');

INSERT INTO album (title, band_id, label_id, year, img, price) VALUES ('the cape verdean blues', 10, 1, 1965,'https://i.discogs.com/4Ar2FlngdW5HmA3Iq3kGCRoS-SUwCpRRu7B_txTdewk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzMjA4/NzctMTM1MjI0MjIz/My03NDAzLmpwZWc.jpeg', 78.89);

INSERT INTO album (title, band_id, label_id, year, img, price, comments) VALUES ('chris brown', 11, 6, 2005, 'https://i.discogs.com/TifaJvKefUzHyfx1c1xFVpI8r8EQ0chEhR-o310UE-8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNjgx/MjItMTE5Nzc0NDAy/OS5qcGVn.jpeg', 9.99, 'new');

INSERT INTO album (title, band_id, label_id, year, img, price, comments) VALUES ('midnight marauders', 7, 6, 1993, 'https://i.discogs.com/8td9Hurb-yK1wGiIQvE3WTeRiUGjc6uQ_t9KNmmBE2s/rs:fit/g:sm/q:90/h:600/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5MjY1/MzctMTQ5NDA4NjYy/Mi01MjkxLmpwZWc.jpeg', 50.00, 'new');