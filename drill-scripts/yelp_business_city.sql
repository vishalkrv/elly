use dfs.yelp;
alter session set `store.format`='json';
create table yelp_business_city as
select city, count(*)  totalreviews from `yelp_business`
group by city order by 2 desc limit 10;
