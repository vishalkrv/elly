use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_reviews_businessid as
select business_id as businessid, count(*) total_reviews_for_business from `yelp_user_reviews` 
group by business_id order by 2 desc limit 10;
