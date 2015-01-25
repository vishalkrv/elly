use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_reviews_userid as
select user_id as userid, count(*) total_reviews_by_user from `yelp_user_reviews` 
group by user_id order by 2 desc limit 10;
