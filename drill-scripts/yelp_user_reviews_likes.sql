use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_reviews_likes as
select likes as likes, count(*) count_of_likes from `yelp_user_reviews` 
group by likes order by 2 desc limit 10;
