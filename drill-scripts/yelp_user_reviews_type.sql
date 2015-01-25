use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_reviews_type as
select type as type, count(*) count_of_type from `yelp_user_reviews` 
group by type order by 2 desc limit 10;
