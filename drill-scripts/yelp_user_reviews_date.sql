use dfs.yelp;
alter session set `store.format`='json';
create table yelp_user_reviews_date as
select y.`date` as date_, count(*) as counts_for_date from `yelp_user_reviews` y 
group by y.`date` order by 1 desc;
