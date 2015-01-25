use dfs.yelp;
alter session set `store.format`='json';
create table yelp_business_categorycount as
select name, repeated_count(categories) as categorycount from `yelp_business`
order by repeated_count(categories) desc limit 10;
