create database Companhia;
use Companhia;

create table Departamento (
  id int auto_increment primary key,
  name varchar(255) not null
);

create table Empregado (
  id int auto_increment primary key,
  name varchar(255) not null,
  email varchar(255) not null unique,
  role varchar(255) not null
);