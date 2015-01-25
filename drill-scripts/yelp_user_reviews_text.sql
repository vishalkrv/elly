use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_reviews_text as
select max(length(text)) as max_text_length, avg(length(text)) as avg_text_length, 
min(length(text)) as  min_text_length from  `yelp_user_reviews` ;
