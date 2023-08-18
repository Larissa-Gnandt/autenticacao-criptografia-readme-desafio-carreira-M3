 create database projeto_desafio_carreira;

 create table usuarios (
  id serial primary key,
  nome text not null,
  email text not null unique,
  senha text not null
);
