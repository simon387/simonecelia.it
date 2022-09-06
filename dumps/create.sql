-- schema
create database simonecelia;
# use simonecelia;

-- table
create table message
(
    id            int auto_increment primary key,
    fromName      varchar(256)                          null,
    fromEmail     varchar(256)                          null,
    fromSubject   varchar(256)                          null,
    fromMessage   varchar(8192)                         null,
    fromTimestamp timestamp default current_timestamp() not null
);

create table client
(
    id            int auto_increment primary key,
    ip            varchar(256),
    visited timestamp default current_timestamp() not null
)
