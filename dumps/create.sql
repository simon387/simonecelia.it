-- schema
create database simonecelia;
# use simonecelia;

-- table
create table message
(
    id            int auto_increment primary key,
    fromName      varchar(256)                          not null,
    fromEmail     varchar(256)                          not null,
    fromSubject   varchar(256)                          not null,
    fromMessage   varchar(8192)                         not null,
    fromTimestamp timestamp default current_timestamp() not null
);

create table client
(
    id      int auto_increment primary key,
    ip      varchar(256)                          not null,
    details varchar(8192)                         not null,
    visited timestamp default current_timestamp() not null
)
