CREATE DATABASE Task_DB;

CREATE TABLE Movies
(
    MID varchar(5),
	mov_name varchar(255),
    rel_date date
);

INSERT INTO Movie
VALUES ('M01', 'SOTY',02/01/2015);
INSERT INTO Movie
VALUES ('M02', 'Baaghi 2',17/05/2016);
INSERT INTO Movie
VALUES ('M03', 'Badla',20/10/2019);

CREATE TABLE Genre 
(
    GID varchar(5),
	gen_name varchar(255)
);

INSERT INTO Genre
VALUES ('G01', 'RomCom');
INSERT INTO Genre
VALUES ('G02', 'Action');
INSERT INTO Genre
VALUES ('G03', 'Thriller');

CREATE TABLE Artist 
(
    AID varchar(5),
	art_name varchar(255),
    gender varchar(1)
);

INSERT INTO Artist
VALUES ('A01', 'Amitabh','M');
INSERT INTO Artist
VALUES ('A02', 'Alia','F');
INSERT INTO Artist
VALUES ('A03', 'Disha','F');
INSERT INTO Artist
VALUES ('A04', 'Tiger','M');
INSERT INTO Artist
VALUES ('A05', 'Varun','M');
INSERT INTO Artist
VALUES ('A006', 'Taapsi','F');

CREATE TABLE Role_type 
(
    RID varchar(5),
	role_name varchar(255)
);

INSERT INTO Role_type
VALUES ('R01', 'Actor');
INSERT INTO Role_type
VALUES ('R02', 'Acteress');

CREATE TABLE Skill_type 
(
    SID varchar(5),
	skill_name varchar(255)
);

INSERT INTO Skill_type
VALUES ('S01', 'Brand Ambassador');
INSERT INTO Skill_type
VALUES ('S02', 'Gym');
INSERT INTO Skill_type
VALUES ('S03', 'Poet');
INSERT INTO Skill_type
VALUES ('S04', 'Singing');

CREATE TABLE Movie_Media 
(
	MID varchar(5),
	media_type varchar(3),
	media_url varchar(255)
);

INSERT INTO Movie_Media
VALUES ('M01', 'img', 'm01@img');
INSERT INTO Movie_Media
VALUES ('M02', 'vid','m02@vid');
INSERT INTO Movie_Media
VALUES ('M03', 'vid','m03@vid');

CREATE TABLE Movie_Review 
(
    UID varchar(5),
    MID varchar(5),
	rating varchar(1),
    rev_date date
);

INSERT INTO Movie_Review
VALUES ('U01', 'M01','3',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U01', 'M02','4',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U01', 'M03','5',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U02', 'M01','3',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U02', 'M02','4',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U02', 'M03','5',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U03', 'M01','3',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U03', 'M02','4',01/01/2021);
INSERT INTO Movie_Review
VALUES ('U03', 'M03','5',01/01/2021);

CREATE TABLE Movie_Genre 
(
    GID varchar(5),
    MID varchar(5),
	nearness varchar(1)
);

INSERT INTO Movie_Genre
VALUES ('G01', 'M01', '5');
INSERT INTO Movie_Genre
VALUES ('G01', 'M02', '3');
INSERT INTO Movie_Genre
VALUES ('G01', 'M03', '0');
INSERT INTO Movie_Genre
VALUES ('G02', 'M01', '3');
INSERT INTO Movie_Genre
VALUES ('G02', 'M02', '5');
INSERT INTO Movie_Genre
VALUES ('G02', 'M03', '1');
INSERT INTO Movie_Genre
VALUES ('G03', 'M01', '0');
INSERT INTO Movie_Genre
VALUES ('G03', 'M02', '3');
INSERT INTO Movie_Genre
VALUES ('G03', 'M03', '5');

CREATE TABLE Artist_Role 
(
    AID varchar(5),
    RID varchar(5),
    MID varchar(5)
);

INSERT INTO Movie_Genre
VALUES ('A01', 'M03', 'R01');
INSERT INTO Movie_Genre
VALUES ('A02', 'M01', 'R02');
INSERT INTO Movie_Genre
VALUES ('A03', 'M02', 'R02');
INSERT INTO Movie_Genre
VALUES ('A04', 'M02', 'R01');
INSERT INTO Movie_Genre
VALUES ('A05', 'M01', 'R01');
INSERT INTO Movie_Genre
VALUES ('A06', 'M03', 'R02');

CREATE TABLE Artist_Skill
(
    AID varchar(5),
    SID varchar(5)
);

INSERT INTO Movie_Genre
VALUES ('A01','S01');
INSERT INTO Movie_Genre
VALUES ('A01','S03');
INSERT INTO Movie_Genre
VALUES ('A02','S01');
INSERT INTO Movie_Genre
VALUES ('A02','S04');
INSERT INTO Movie_Genre
VALUES ('A03','S01');
INSERT INTO Movie_Genre
VALUES ('A03','S02');
INSERT INTO Movie_Genre
VALUES ('A04','S02');
INSERT INTO Movie_Genre
VALUES ('A05','S01');
INSERT INTO Movie_Genre
VALUES ('A06','S02');

