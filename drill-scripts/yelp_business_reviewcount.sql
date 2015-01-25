use dfs.yelp;
alter session set `store.format`='json';
create table yelp_business_reviewcount as
select name, review_count  totalreviews from `yelp_business`
order by 2 desc limit 10;
